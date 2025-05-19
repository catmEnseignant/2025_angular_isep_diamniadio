import { Routes } from '@angular/router';

import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';
import { FormMatiereComponent } from './form-matiere/form-matiere.component';



export const MATIERES_ROUTES: Routes = [
    { path:"liste-matieres",component:ListeMatiereComponent},
    { path:"form-matiere",component:FormMatiereComponent},
  

  {path:"",redirectTo:"/liste-matieres",pathMatch:"full"},
   
];
