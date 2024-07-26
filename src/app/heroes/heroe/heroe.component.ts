import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'ironman';
  public age: number = 45;

  public capilalizedName() : string {
    return this.name.toUpperCase();
  }

  public getHeroeDescription() : string {
    
    return `${this.name} - ${this.age}`
  }

  public changeHeroeName() : void {
    
    this.name = 'Spiderman'
  }

  public ChangeHeroeAge() : void {
    
    this.age = 30
  }

  public reset() : void {
    
    this.name = 'ironman';
    this.age = 45;
  }
}