import { Component } from '@angular/core';
import { PersonalInfoComponent } from "../../personal-info/personal-info.component";
import { SkillsComponent } from "../../skills/skills.component";
import { HowToBeComponent } from "../../how-to-be/how-to-be.component";

@Component({
  selector: 'app-left-nav',
  imports: [PersonalInfoComponent, SkillsComponent, HowToBeComponent],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.sass'
})
export class LeftNavComponent {

}
