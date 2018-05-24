import { Component, Input } from '@angular/core';
import { WordSerivce } from './word.service';
import { Word } from './word';

@Component({
  selector: 'app-word-item',
  template: `
    <div class="word-container">
      <h3 class="text-success">{{ wordInfo.en }}</h3>
      <h3 class="text-danger">
        {{ wordInfo.isMemorized ? '*******' : wordInfo.vn }}
      </h3>
      </div>
      <div class="btn-container">
      <button
        class="{{ wordInfo.isMemorized ? 'btn btn-success' : 'btn btn-danger' }}"
        (click)="wordService.toggleWord(wordInfo._id, !wordInfo.isMemorized);"
      >
        {{ wordInfo.isMemorized ? 'Forgot' : 'Memorized' }}
      </button>
      <button
          class="btn btn-warning"
          (click)="wordService.removeWord(wordInfo._id);"
      >
          Remove
      </button>
    </div>
  `
})

export class WordItemComponent {
  @Input() wordInfo: Word;
  constructor(public wordService: WordSerivce) {}
}
