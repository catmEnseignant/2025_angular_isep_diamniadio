import { Routes } from '@angular/router';
import { ClasseComponent } from '../classe/classe.component';
import { MatiereComponent } from '../matiere/matiere.component';
import { ListClasseComponent } from './list-classe/list-classe.component';
import { FormClasseComponent } from './form-classe/form-classe.component';


export const CLASSE_ROUTES: Routes = [
    {path:"list-classes", component:ListClasseComponent},
    {path:"list-matiere",component:FormClasseComponent},
    {path:"",redirectTo:"/liste-classe",pathMatch:"full"},
   
];