import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

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
    constructor(private store: Store<any>) {}
    increase() {
        this.store.dispatch({ type: 'INCREASE' });
    }

    descrease() {
        this.store.dispatch({ type: 'DESCREASE' });
    }

    reset() {
        this.store.dispatch({ type: 'RESET' });
    }
}
