import { Component } from '@angular/core';
import { Word, WORDS } from './word';

@Component({
    selector: 'app-list-words',
    templateUrl: './list-words.component.html'
})

export class ListWordsComponent {
    words = WORDS;
}
