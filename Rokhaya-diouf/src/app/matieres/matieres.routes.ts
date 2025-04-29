import { Routes } from '@angular/router';
import { ListeMatieresComponent } from './liste.matieres/liste.matieres.component';
import { FormMatieresComponent } from './form.matieres/form.matieres.component';



export const MATIERE_ROUTES: Routes = [

{path:"liste-matieres",component:ListeMatieresComponent},
{path:"form-matieres",component:FormMatieresComponent},

{path:"",redirectTo:"/liste-matieres",pathMatch:"full"}, 
];
