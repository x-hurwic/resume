import { Component } from '@angular/core';
import { ExperiencesComponent } from "../../experiences/experiences.component";
import { StudiesComponent } from "../../studies/studies.component";
import { TitleComponent } from "../../title/title.component";

@Component({
  selector: 'app-main-content',
  imports: [ExperiencesComponent, StudiesComponent, TitleComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.sass'
})
export class MainContentComponent {

}
