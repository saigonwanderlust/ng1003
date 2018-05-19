import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <button class="btn btn-success" (click)="increase();">Increase</button>
            <button class="btn btn-warning" (click)="descrease();">Descrease</button>
            <button class="btn btn-danger" (click)="reset();">Reset</button>
        </div>
    `
})

export class ChildComponent {
    @Output() onIncrease = new EventEmitter();
    @Output() onDescrease = new EventEmitter();
    @Output() onReset = new EventEmitter();

    increase() { this.onIncrease.emit(); }
    descrease() { this.onDescrease.emit(); }
    reset() { this.onReset.emit(); }
}
