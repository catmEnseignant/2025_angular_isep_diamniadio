import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {path:"classes",
    loadChildren:() => import("./classes/classes.routes").then((m) => m.CLASSE_ROUTES),
  },

  {path:"matieres",
    loadChildren:() => import("./matieres/matieres.routes").then((m) => m.Matiere_ROUTES),
  },


  {path:"homes",component:HomeComponent},
  {path:"", redirectTo:"/homes", pathMatch: "full"}

];
