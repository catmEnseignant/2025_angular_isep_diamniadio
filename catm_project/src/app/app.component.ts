import { Component } from '@angular/core';
import {ClasseComponent} from './classe/classe.component';
import {RouterModule, RouterOutlet} from '@angular/router';
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catm_project';
}
