import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character-interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    public characters : Character[] = [
        {
            id: uuid(),
            name:'Krilin',
            power: 90
        },
        {
            id: uuid(),
            name:'Goku',
            power: 9999
        },
        {
            id: uuid(),
            name:'Goku',
            power: 7500
        },
    ];
        addCharacter(character:Character):void{

            const newCharacter: Character = { id: uuid(), ...character}

            this.characters.push(newCharacter)
        }
    
        deleteCharacterById(id :string) {
            this.characters = this.characters.filter( character => character.id !== id)
        }
}