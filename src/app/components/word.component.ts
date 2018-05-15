import { Component } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <h3>{{ en }}</h3>
        <p>{{ vn }}</p>
        <img src="{{ imgSrc }}" >
        <img [src]="imgSrc" >
        <br>
        <button class="btn btn-success" [disabled]="false">
            Play
        </button>
        <button class="btn btn-warning" (click)="showTime();">
            Show
        </button>
        <h3>Count = {{ count }}</h3>
        <button class="btn btn-danger" (click)="increase();">
            Increase
        </button>
    `,
    styles: [
        `
            p { color: red }
        `
    ]
})

export class WordComponent {
    imgSrc = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    en = 'One';
    vn = 'Mot';
    count = 0;
    showTime() {
        alert(new Date());
    }
    increase() {
        this.count++;
    }
}
