import { Component } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <button class="btn btn-success">Increase</button>
            <button class="btn btn-warning">Descrease</button>
            <button class="btn btn-danger">Reset</button>
        </div>
    `
})

export class ChildComponent {}
