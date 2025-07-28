import { Component } from '@angular/core';
import { MainContentComponent } from "./main-content/main-content.component";
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  imports: [MatSidenavModule, LeftNavComponent, MainContentComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.sass'
})
export class LayoutComponent {

}
