import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
  <h3>counter : {{counter}}</h3>

<button (click)="increaseBy(1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="decreaseBy(-1)">-1</button>`,
})
export class CounterComponent {

  public counter: number = 3;

  increaseBy(value: number): void {
    this.counter += value;
  }

  decreaseBy(value: number): void {
    if (this.counter > 0) {
      this.counter += value;
    }
    return;
  }

  reset() {
    this.counter = 3;
  }

}
