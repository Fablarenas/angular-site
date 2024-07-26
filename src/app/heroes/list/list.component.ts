import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroeNameDeleted?:string = '';
public heroeDeleted :boolean = false;
public heroeNames : string[] = ['Spiderman','Hulk','IronMan']
public removeHeroe():void{

  this.heroeDeleted = true;
  this.heroeNameDeleted = this.heroeNames.pop()
}
}
