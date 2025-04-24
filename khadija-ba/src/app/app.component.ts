import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { NavebarComponent } from './shared/navebar/navebar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule,RouterOutlet,NavebarComponent,FooterComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'khadija-ba';
}
