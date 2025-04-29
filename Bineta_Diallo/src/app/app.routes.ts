import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:"classes",
    loadChildren:() => import("./classes/classes.routes").then((m) => m.CLASSE_ROUTES),
  },

  {path:"matieres",loadChildren:() => import("./matieres/matieres.routes").then((m) => m.MATIERE_ROUTES),
  },

  {path:"home", component:HomeComponent},

  {path:"",redirectTo:"/home",pathMatch:"full"},
];
