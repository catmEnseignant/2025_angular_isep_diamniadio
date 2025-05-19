import { Routes } from '@angular/router';
import { FormMatiereComponent } from './form-matiere/form-matiere.component';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';



export const Matiere_ROUTES: Routes = [
  {path:"list-matieres",component:ListMatiereComponent},
  {path:"form-matieres",component:FormMatiereComponent},
  {path:"", redirectTo:"/list-matieres", pathMatch:"full"},

];
