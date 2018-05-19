import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <button class="btn btn-success" (click)="onIncrease.emit();">Increase</button>
            <button class="btn btn-warning" (click)="onDescrease.emit();">Descrease</button>
            <button class="btn btn-danger" (click)="onReset.emit();">Reset</button>
        </div>
    `
})

export class ChildComponent {
    @Output() onIncrease = new EventEmitter();
    @Output() onDescrease = new EventEmitter();
    @Output() onReset = new EventEmitter();
}
