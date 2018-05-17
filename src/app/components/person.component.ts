import { Component } from '@angular/core';

@Component({
    selector: 'app-person',
    template: `
        <div>
            <h3>Name: {{ name }}</h3>
            <p>Age: {{ age }}</p>
            <button class="btn btn-success" (click)="increase();">Increase</button>
            <button class="btn btn-warning" (click)="descrease();">Descrease</button>
        </div>
    `
})

export class PersonComponent {
    name = 'Teo Nguyen';
    age = 16;

    increase() { this.age++;  }
    descrease() { this.age--;  }
}
