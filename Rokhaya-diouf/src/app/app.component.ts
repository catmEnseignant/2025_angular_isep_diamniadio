import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ClasseComponent,MatiereComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Rokhaya-diouf';
}
