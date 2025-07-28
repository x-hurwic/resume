import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-how-to-be',
  imports: [MatChipsModule],
  templateUrl: './how-to-be.component.html',
  styleUrl: './how-to-be.component.sass'
})
export class HowToBeComponent {

  readonly howToBes: string[] = [ 'Méthodes agiles', 'Travail d’équipe', 'Notion d’UX', 'Vulgarisation technique'];

}
