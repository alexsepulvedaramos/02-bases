import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  public lastHero: string = '';

  removeLastHero(): void {

    const name = this.heroNames.pop();

    if (name !== undefined) {
      this.lastHero = name;
    }
  }
}
