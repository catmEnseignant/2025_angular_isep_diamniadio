import { Routes } from '@angular/router';

import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { FormClasseComponent } from './form-classe/form-classe.component';


export const CLASSES_ROUTES: Routes = [
    {path:"liste-classe",component:ListeClasseComponent},
    {path:"form-classe",component:FormClasseComponent},

    {path:"",redirectTo:"/liste-classe",pathMatch:"full"},
   
];
