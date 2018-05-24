import { Component } from '@angular/core';
import { Word } from './word';
import { Store } from '@ngrx/store';
import { AppState } from './types';

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
    shouldShowForm: boolean;
    txtEn = '';
    txtVn = '';
    constructor(private store: Store<AppState>) {
        this.store.select('shouldShowForm').subscribe(s => this.shouldShowForm = s);
    }

    toggleForm() {
        this.store.dispatch({ type: 'TOGGLE_FORM' });
    }

    addWord() {
        // const word: Word = new Word(this.txtEn, this.txtVn);
        // this.store.dispatch({ type: 'ADD_WORD', word });
        // this.txtEn = '';
        // this.txtVn = '';
    }
}
