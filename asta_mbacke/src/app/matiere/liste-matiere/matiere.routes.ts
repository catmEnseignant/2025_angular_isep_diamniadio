import { Routes } from '@angular/router';
import { MatieresComponent } from '../../matieres/matieres.component';

export const MATIERES_ROUTES: Routes = [
  {path:"liste-matieres",component:MatieresComponent},
  {path:"form-matieres",component:MatieresComponent},
  {path:"",component:MatieresComponent},
   
];
