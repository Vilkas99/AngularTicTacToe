import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  template: `<button nbButton *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button nbButton hero status="info" *ngIf="value == 'O'">
      {{ value }}
    </button>`,
  styles: [
    `
      button {
        width: 100%;
        height: 100%;
        color: purple;
      }
    `,
  ],
})
export class CuadroComponent {
  @Input() value: 'X' | 'O';
}
