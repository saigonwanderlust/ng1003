import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from './word';
import { AppState } from './types';
import { WeatherService } from './weather-service.service';
import { WordSerivce } from './word.service';

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

    constructor(private store: Store<AppState>, private wordService: WordSerivce) {
        this.store.select('words').subscribe(w => this.words = w);
        this.store.select('filterMode').subscribe(f => this.filterMode = f);
        this.wordService.getWords();
    }

    get filteredWords() {
        return this.words.filter(word => {
            if (this.filterMode === 'SHOW_ALL') return true;
            if (this.filterMode === 'SHOW_FORGOT') return !word.isMemorized;
            return word.isMemorized;
        });
    }

}
