import { Component, Input, input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character-interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:10
  }
  ]
  @Output()
  public onDeleteEventEmitter: EventEmitter<string> = new EventEmitter<string>()
  //onDelete

  onDeleteCharacter(id?:string):void{
    if (!id) return
    this.onDeleteEventEmitter.emit(id)
  }
}
