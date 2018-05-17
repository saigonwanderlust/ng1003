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

    addWord() {
        const word = new Word(this.txtEn, this.txtVn);
        this.words.push(word);
        this.txtEn = '';
        this.txtVn = '';
    }
}
