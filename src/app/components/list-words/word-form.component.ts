import { Component } from '@angular/core';
import { Word } from './word';

@Component({
  selector: 'app-word-form',
  template: `
    <div style="margin-top: 10px; margin-bottom: 10px">
        <button class="btn btn-success">
          Create new word
        </button>
        <div class="form-group word-form">
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
                <button class="btn btn-success">
                    Add word
                </button>
                <button
                    class="btn btn-danger"
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>
  `
})

export class WordFormComponent {
    txtEn = '';
    txtVn = '';
}
