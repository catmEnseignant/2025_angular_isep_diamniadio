import { Component } from '@angular/core';
import { CouresComponent } from "./coures/coures.component";

@Component({
  selector: 'app-root',
  imports: [CouresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_projet';
}
