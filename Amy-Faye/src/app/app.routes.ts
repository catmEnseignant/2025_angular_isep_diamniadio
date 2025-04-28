import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CLASSE_ROUTES } from './classes/classes.routes';
import { Matiere_ROUTES } from './matieres/matieres.routes';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

export const APP_ROUTES: Routes = [
  {path:"classes",
    loadChildren:() => import("./classes/classes.routes").then((m) => m.CLASSE_ROUTES),
  },

  {path:"matieres",
    loadChildren:() => import("./matieres/matieres.routes").then((m) => m.Matiere_ROUTES),
  },

  {path:"home" ,component:HomeComponent},

  {path:"",redirectTo:"/home" ,pathMatch:"full"},
];
