import { Component } from '@angular/core';
import { MySkills, Skill } from './skill';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills',
  imports: [MatProgressBarModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.sass'
})
export class SkillsComponent {
  public readonly skills: Skill[] = MySkills;
}
