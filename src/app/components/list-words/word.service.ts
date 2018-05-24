import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';

const URL = 'https://word1203.herokuapp.com/word';

@Injectable()

export class WordSerivce {
    constructor(private http: Http, private store: Store<any>) {}

    getWords() {
        return this.http.get(URL)
        .toPromise()
        .then(res => res.json())
        .then(resJson => {
            this.store.dispatch({ type: 'SET_WORDS', words: resJson.words });
        });
    }

    addWord() {}

    removeWord() {}

    toggleWord() {}
}
