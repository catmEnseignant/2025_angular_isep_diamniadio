import { Routes } from '@angular/router';

import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { FormClasseComponent } from './form-classe/form-classe.component';

export const CLASSE_ROUTES: Routes = [
  {path:"liste-classes",component:ListeClasseComponent},
  {path:"form-classes",component:FormClasseComponent},
  
  {path:"",redirectTo:"/liste-classe" ,pathMatch:"full"},
   
];
