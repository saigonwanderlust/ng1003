import { Component } from '@angular/core';
import { WordFilterComponent } from './word-filter.component';
import { Word, WORDS } from './word';

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
    words = WORDS;

    get filteredWords() {
        return this.words.filter(word => {
            // if (this.filter.filterMode === 'SHOW_ALL') return true;
            // if (this.filter.filterMode === 'SHOW_FORGOT') return !word.isMemorized;
            // return word.isMemorized;
            return true;
        });
    }

}
