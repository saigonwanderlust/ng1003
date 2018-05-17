import { Component } from '@angular/core';

@Component({
    selector: 'app-person',
    template: `
        <div>
            <h3>Name: {{ name }}</h3>
            <p>Age: {{ age }}</p>
            <div *ngIf="age >= 18">
                <p>Ban da du tuoi.</p>
            </div>
            <div *ngFor="let skill of skills; let i = index">
                <p class="text-info">{{ i + 1 }}. {{ skill.name }}: {{ skill.grade }}</p>
            </div>
            <button class="btn btn-success" (click)="increase();">Increase</button>
            <button class="btn btn-warning" (click)="descrease();">Descrease</button>
            <div style="width: 150px">
                <br />
                <input class="form-control" placeholder="Skill name" [(ngModel)]="txtSkillName" />
                <br />
                <input type="number" class="form-control" placeholder="Skill grade" [(ngModel)]="txtSkillGrade" />
                <br />
                <button class="btn btn-success" (click)="addSkill();">Add Skill</button>
            </div>
        </div>
    `
})

export class PersonComponent {
    name = 'Teo Nguyen';
    age = 16;
    txtSkillName = '';
    txtSkillGrade = 0;

    skills: Skill[] = [
        { name: 'NodeJS', grade: 9 },
        { name: 'React', grade: 5 },
        { name: 'Angular', grade: 7 },
    ];
    increase() { this.age++;  }
    descrease() { this.age--;  }
    addSkill() {
        this.skills.push({
            name: this.txtSkillName,
            grade: this.txtSkillGrade
        });
        this.txtSkillName = '';
        this.txtSkillGrade = 0;
    }
}

interface Skill {
    name: string;
    grade: number;
}
