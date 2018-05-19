import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <div>
            <h3>Count = {{ count }}</h3>
            <app-child
                (onIncrease)="onIncrease();"
                (onDescrease)="onDescrease();"
                (onReset)="onReset();"
            ></app-child>
        </div>
    `
})

export class ParentComponent {
    count = 1;

    onIncrease() { this.count++; }
    onDescrease() { this.count--; }
    onReset() { this.count = 1; }
}
