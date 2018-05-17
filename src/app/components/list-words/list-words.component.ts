import { Component } from '@angular/core';
import { Word, WORDS } from './word';

@Component({
    selector: 'app-list-words',
    templateUrl: './list-words.component.html'
})

export class ListWordsComponent {
    words = WORDS;
    txtEn = '';
    txtVn = '';
    shouldShowForm = false;
    filterMode = 'SHOW_ALL';

    addWord() {
        const word = new Word(this.txtEn, this.txtVn);
        this.words.push(word);
        this.txtEn = '';
        this.txtVn = '';
        this.toggleForm();
    }

    removeWord(_id: string) {
        const index = this.words.findIndex(word => word._id === _id);
        this.words.splice(index, 1);
    }

    toggleIsMemorized(_id: string) {
        const wordItem = this.words.find(word => word._id === _id);
        wordItem.isMemorized = !wordItem.isMemorized;
    }

    toggleForm() {
        this.shouldShowForm = !this.shouldShowForm;
    }

    get filteredWords(): Word[] {
        return this.words.filter(word => {
            if (this.filterMode === 'SHOW_ALL') return true;
            if (this.filterMode === 'SHOW_FORGOT') return !word.isMemorized;
            return word.isMemorized;
        });
    }
}
