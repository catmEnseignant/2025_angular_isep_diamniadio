import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fatou_bob';
}
