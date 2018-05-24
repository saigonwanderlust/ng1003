import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';

const URL = 'https://word1203.herokuapp.com/word';

@Injectable()

export class WordSerivce {
    constructor(private http: Http, private store: Store<any>) {}

    getWords() {
        this.http.get(URL)
        .toPromise()
        .then(res => res.json())
        .then(resJson => {
            this.store.dispatch({ type: 'SET_WORDS', words: resJson.words });
        });
    }

    addWord(en: string, vn: string) {
        this.http.post(URL, { en, vn })
        .toPromise()
        .then(res => res.json())
        .then(resJson => {
            this.store.dispatch({ type: 'ADD_WORD', word: resJson.word });
        });
    }

    removeWord(_id: string) {
        this.http.delete(`${URL}/${_id}`)
        .toPromise()
        .then(res => res.json())
        .then(resJson =>  this.store.dispatch({ type: 'REMOVE_WORD', _id }));
    }

    toggleWord() {}
}
