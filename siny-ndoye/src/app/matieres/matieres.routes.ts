import { Routes } from '@angular/router';
import { MatiereComponent } from '../matiere/matiere.component';
import { AppComponent } from '../app.component';
import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';
import { FormClasseComponent } from '../Classes/form-classe/form-classe.component';



export const MATIERES_ROUTES : Routes = [
    {path:"liste",component:ListeMatiereComponent},
    {path:"form",component:FormClasseComponent},
    {path:"",redirectTo:"/liste-mayiere",pathMatch:"full"}
   
   
];

