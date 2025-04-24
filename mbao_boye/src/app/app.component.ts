import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { ClasseComponent } from './classe/classe.component';
// import { MatieresComponent } from './matieres/matieres.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mayarame_sow';
}