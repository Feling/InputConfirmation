import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'my-confirm',
    template: `
        <h1>You submitted the following details. Is this correct?</h1>
        <p>Your name is <span class="highlight">{{myself.name}}</span> and you're <span class="highlight">{{myself.age}}</span>
         years old. Please click on 'Confirm' button if you have made any changes
         to this information.</p>
        <div>
            <label for="name"> Yor Name</label>
            <input tyoe="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
        </div>
         <div>
            <label for="age"> Yor Age</label>
            <input tyoe="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
        </div>
        <br>
        <div> Filled out: {{isFilled ? 'Yes' :'No'}}</div>
        <div> Valid: {{isValid ? 'Yes' : 'No'}}</div>
        <br>
        <button [disabled]="!isValid" (click)="onConfirm()">Submit</button>
    `,
    inputs: ['myself'],
    outputs: ['confirmed']
})

export class ConfirmComponent {
    myself = {name: '', age: ''};
    isFilled = false;
    isValid = false;
    confirmed = new EventEmitter<{name: string, age: string}>();


    onKeyup() {
        if (this.myself.name != '' && this.myself.age != '') {
            this.isFilled = true;
        } else {
            this.isFilled = false;
        }
        if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    onConfirm() {
        this.confirmed.emit(this.myself);
    }
}
