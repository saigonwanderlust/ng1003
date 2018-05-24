import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { Word } from './word';
import { AppState } from './types';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=SaiGon';

@Component({
    selector: 'app-list-words',
    template: `
        <app-word-form></app-word-form>
        <app-word-filter></app-word-filter>
        <div class="word" *ngFor="let word of filteredWords">
            <app-word-item [wordInfo]="word"></app-word-item>
        </div>
    `
})

export class ListWordsComponent {
    words: Word[];
    filterMode: string;

    constructor(private store: Store<AppState>, private http: Http) {
        this.store.select('words').subscribe(w => this.words = w);
        this.store.select('filterMode').subscribe(f => this.filterMode = f);
        this.http.get(URL)
        .toPromise()
        .then(res => res.json())
        .then(resJson => console.log(resJson.main.temp));
    }

    get filteredWords() {
        return this.words.filter(word => {
            if (this.filterMode === 'SHOW_ALL') return true;
            if (this.filterMode === 'SHOW_FORGOT') return !word.isMemorized;
            return word.isMemorized;
        });
    }

}
