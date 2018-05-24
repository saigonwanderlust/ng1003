import { Injectable } from '@angular/core';
import { RequestService } from './request.service';
import { Store } from '@ngrx/store';

// const URL = 'https://word1203.herokuapp.com/word';

@Injectable()

export class WordSerivce {
    constructor(private request: RequestService, private store: Store<any>) {}

    getWords() {
        this.request.get('/word')
        .then(resJson => {
            this.store.dispatch({ type: 'SET_WORDS', words: resJson.words });
        });
    }

    addWord(en: string, vn: string) {
        this.request.post('/word', { en, vn })
        .then(resJson => {
            this.store.dispatch({ type: 'ADD_WORD', word: resJson.word });
        });
    }

    removeWord(_id: string) {
        this.request.delete(`/word/${_id}`)
        .then(resJson =>  this.store.dispatch({ type: 'REMOVE_WORD', _id }));
    }

    toggleWord(_id, isMemorized: boolean) {
        this.request.put(`/word/${_id}`, { isMemorized })
        .then(resJson =>  this.store.dispatch({ type: 'TOGGLE_WORD', _id }));
    }

    sendRequestWithToken() {
        // const headers = new Headers({ token: 'a.b.c' });
        // this.http.get(URL, { headers })
        // .toPromise()
        // .then(res => res.json())
        // .then(resJson => console.log(resJson));
    }
}
