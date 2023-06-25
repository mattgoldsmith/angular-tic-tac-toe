import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button class="o" *ngIf="value == 'O'">{{ value }}</button>
    <button class="x" *ngIf="value == 'X'">{{ value }}</button>
  `,
  styles: [
    `button {
        height: 100%; 
        width: 100%;
        font-size: 4em;
        background: linear-gradient(#937ad2, #7e64c0);
        color: white;
        font-weight: bold;
    }`,
    `button.x {
        background: linear-gradient(to right, #43d1a9, #0dc091);
    }`,
    `button.o {
        background: linear-gradient(to right, #36a7fa, #1688e5);;
    }`
  ]
})
export class SquareComponent {

    @Input() value: 'X' | 'O' = 'X';

}
