import { Component } from '@angular/core';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component'; 

@Component({
  selector: 'app-root',
  standalone: true,

  //import de deux composant dans app
  imports: [ClasseComponent, MatiereComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ pas styleUrl
})
export class AppComponent {
  title = 'angular_projet';
}
