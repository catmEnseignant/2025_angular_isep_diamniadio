import { Routes } from '@angular/router';

import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';


export const MATIERE_ROUTES: Routes = [
  {path:"liste-matiere",component:ListeMatiereComponent},
  
  {path:"",redirectTo:"/liste-matiere",pathMatch:"full"},

];

