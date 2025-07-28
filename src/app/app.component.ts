import { Component } from '@angular/core';
import { LayoutComponent } from "./_layout/layout.component";

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'cv';
}
