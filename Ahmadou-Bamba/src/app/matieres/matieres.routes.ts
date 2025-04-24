import { Routes } from '@angular/router';
import { MatiereComponent } from '../matiere/matiere.component';


export const Matiere_ROUTES: Routes = [
  {path:"list-matieres",component:MatiereComponent},
  {path:"form-matieres",component:MatiereComponent},
  {path:"",component:MatiereComponent},

];
