import { Routes } from '@angular/router';
;
import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';
import { FormMatireComponent } from './form-matire/form-matire.component';



export const MATIERES_ROUTES : Routes = [
    {path:"liste-matiere",component:ListeMatiereComponent},
    {path:"form-matiere",component:FormMatireComponent},
    {path:"",redirectTo:"/liste-matiere",pathMatch:"full"}
   
   
];

