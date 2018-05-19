import { Component } from '@angular/core';

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
            />
            <br />
            <input
                placeholder="Vietnamese"
                class="form-control"
            />
            <br />
            <div class="btn-container">
                <button class="btn btn-success">
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
    shouldShowForm = false;

    toggleForm() {
        this.shouldShowForm = !this.shouldShowForm;
    }
}
