import { Routes } from '@angular/router';
import { FormMatiereComponent } from './form-matiere/form-matiere.component';

import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';


export const MATIERE_ROUTES: Routes = [
    {path:"liste-matiere",component:ListeMatiereComponent},
    {path:"form-matiere",component:FormMatiereComponent},
    {path:"",redirectTo:"/liste-matiere",pathMatch:"full"},
    
];