import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public title:string = 'Holi';
  public counter:number = 1;

  increase(params:number):void {
    this.counter +=1;
  }
  decrease(params:number):void {
    this.counter -=1;
  }
  reset():void {
    this.counter = 10;
  }
}
