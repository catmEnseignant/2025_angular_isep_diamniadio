import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClasseComponent } from './classe/classe.component';
import { MatieresComponent } from './matieres/matieres.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ClasseComponent,MatieresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sokhna_May';
}
