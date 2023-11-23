import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() characterList: Character[] = [];

  @Output() onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index: number): void {

    if (this.characterList[index].id) {
      this.onDelete.emit(this.characterList[index].id);
    }
  }

}
