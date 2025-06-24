import { Routes } from '@angular/router';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import { FormMatiereComponent } from './form-matiere/form-matiere.component';


export const MATIERE_ROUTES: Routes = [
  {path:"liste-matieres",component:ListMatiereComponent},
  {path:"form-matiere",component:FormMatiereComponent},
  {path:"",redirectTo:"/list-matiere", pathMatch:"full"},

];