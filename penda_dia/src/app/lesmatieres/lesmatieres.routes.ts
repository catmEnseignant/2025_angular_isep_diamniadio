import { Routes } from '@angular/router';
import { ListMatieresComponent } from './list-matieres/list-matieres.component';
import { FormMatieresComponent } from './form-matieres/form-matieres.component';

export const MATIERES_ROUTES : Routes = [
   {path:"list-matieres",component:ListMatieresComponent},
   {path:"form-matieres",component:FormMatieresComponent},
   {path:"",redirectTo:"/list-matieres",pathMatch:"full"} 
];
