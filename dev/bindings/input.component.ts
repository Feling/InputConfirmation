import {Component} from 'angular2/core';

@Component({
    selector: 'my-input',
    template: `
        <h1>Your details, please</h1>
        <div>
            <label for="name"> Yor Name</label>
            <input tyoe="text" id="name">
        </div>
         <div>
            <label for="age"> Yor Age</label>
            <input tyoe="text" id="age">
        </div>
        <br>
        <div> Filled out: {{isFilled ? 'Yes' :'No'}}</div>
        <div> Valid: {{isValid ? 'Yes' : 'No'}}</div>
        <br>
        <button [disabled]="!isValid">Submit</button>
    `
})

export class InputComponent {
    myself = {name: '', age: ''};
    isFilled = false;
    isValid = false;
}