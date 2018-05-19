import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <button class="btn btn-success" (click)="onIncrease.emit();">Increase</button>
            <button class="btn btn-warning">Descrease</button>
            <button class="btn btn-danger">Reset</button>
        </div>
    `
})

export class ChildComponent {
    @Output() onIncrease = new EventEmitter();
}
