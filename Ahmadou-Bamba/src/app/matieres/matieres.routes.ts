import { Routes } from '@angular/router';
import { ListClasseComponent } from '../classes/list-classe/list-classe.component';
import { FormMatiereComponent } from './form-matiere/form-matiere.component';



export const Matiere_ROUTES: Routes = [
  {path:"list-matieres",component:ListClasseComponent},
  {path:"form-matieres",component:FormMatiereComponent},
  {path:"", redirectTo:"/list-matieres", pathMatch:"full"},

];
