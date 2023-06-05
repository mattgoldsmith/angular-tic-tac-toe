import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styles: [
    `button {
        height: 100%; 
        width: 100%;
        font-size: 4em;
        background: MediumAquaMarine;
    }`,
    `app-square[ng-reflect-value=X] button {
        background: MediumSeaGreen;
    }`,
    `app-square[ng-reflect-value=O] button {
        background: MediumPurple;
    }`
  ]
})
export class SquareComponent {

    @Input() value: 'X' | 'O' = 'X';

}
