import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const URL = 'https://word1203.herokuapp.com/word';

@Injectable()

export class WordSerivce {
    constructor(private http: Http) {}

    getWords() {
        this.http.get(URL)
        .toPromise()
        .then(res => res.json())
        .then(resJson => console.log(resJson.words));
    }

    addWord() {}

    removeWord() {}

    toggleWord() {}
}
