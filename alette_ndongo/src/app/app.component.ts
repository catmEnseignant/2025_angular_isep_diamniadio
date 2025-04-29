import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ClasseComponent } from './classe/classe.component';
import { MatieresComponent } from './matieres/matieres.component';
import { FooterComponent } from './footer/footer.component';
import { FormClasseComponent } from './classes/form-classe/form-classe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,NavbarComponent,FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet-angular';
}
