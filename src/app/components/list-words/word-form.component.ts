import { Component, Output, EventEmitter } from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-word-form',
  template: `
    <div style="margin-top: 10px; margin-bottom: 10px">
        <button class="btn btn-success" *ngIf="!shouldShowForm" (click)="toggleForm();">
          Create new word
        </button>
        <div class="form-group word-form" *ngIf="shouldShowForm">
            <input
                placeholder="English"
                class="form-control"
                [(ngModel)]="txtEn"
            />
            <br />
            <input
                placeholder="Vietnamese"
                class="form-control"
                [(ngModel)]="txtVn"
            />
            <br />
            <div class="btn-container">
                <button class="btn btn-success" (click)="addWord();">
                    Add word
                </button>
                <button
                    class="btn btn-danger"
                    (click)="toggleForm();"
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
  `
})

export class WordFormComponent {
    @Output() onAddWord = new EventEmitter<Word>();
    shouldShowForm = false;
    txtEn = '';
    txtVn = '';

    toggleForm() {
        this.shouldShowForm = !this.shouldShowForm;
    }

    addWord() {
        const word = new Word(this.txtEn, this.txtVn, false);
        this.onAddWord.emit(word);
        this.txtEn = '';
        this.txtVn = '';
        this.shouldShowForm = false;
    }
}
