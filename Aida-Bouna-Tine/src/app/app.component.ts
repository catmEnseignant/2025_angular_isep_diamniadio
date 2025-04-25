import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { MatiereComponent } from './matiere/matiere.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterModule,RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aida-Bouna-Tine';
}
