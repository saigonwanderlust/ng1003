import { Component } from '@angular/core';

@Component({
    selector: 'app-my-input',
    template: `
        <div class="form-group" style="margin: 10px">
            <input class="form-control" placeholder="Enter your email" />
            <br>
            <button class="btn btn-success">Show</button>
        </div>
    `
})

export class MyInputComponent {}
