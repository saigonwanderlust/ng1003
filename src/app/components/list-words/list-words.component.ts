import { Component, ViewChild } from '@angular/core';
import { WordFilterComponent } from './word-filter.component';
import { Word, WORDS } from './word';

@Component({
    selector: 'app-list-words',
    template: `
        <app-word-form (onAddWord)="onAddWord($event)"></app-word-form>
        <app-word-filter></app-word-filter>
        <div class="word" *ngFor="let word of filteredWords">
            <app-word-item
                [wordInfo]="word"
                (onRemoveWord)="onRemoveWord($event)"
                (onToggleWord)="onToggleWord($event)"
            ></app-word-item>
        </div>
    `
})

export class ListWordsComponent {
    words = WORDS;
    @ViewChild(WordFilterComponent) filter: WordFilterComponent;

    get filteredWords() {
        return this.words.filter(word => {
            if (this.filter.filterMode === 'SHOW_ALL') return true;
            if (this.filter.filterMode === 'SHOW_FORGOT') return !word.isMemorized;
            return word.isMemorized;
        });
    }

    onAddWord(word: Word) {
        this.words.push(word);
    }

    onRemoveWord(_id: string) {
        const index = this.words.findIndex(w => w._id === _id);
        this.words.splice(index, 1);
    }

    onToggleWord(_id: string) {
        const word = this.words.find(w => w._id === _id);
        word.isMemorized = !word.isMemorized;
    }
}
