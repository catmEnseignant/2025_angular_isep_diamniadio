import { Routes } from '@angular/router';
import { MatieresComponent } from '../matieres/matieres.component';


export const MATIERE_ROUTES: Routes = [
  {path:"liste-matiere",component:MatieresComponent},
  {path:"form-matiere",component:MatieresComponent},
  {path:"",component:MatieresComponent},

];

