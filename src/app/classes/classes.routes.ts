import { Routes } from '@angular/router';
import { MatiereComponent } from '../matiere/matiere.component';
import { AppComponent } from '../app.component';
import { ListClasseComponent } from './list-classe/list-classe.component';
import { FormClasseComponent } from './form-classe/form-classe.component';




export const APP_ROUTES: Routes = [
    
     { path:"list-classes" ,component:ListClasseComponent},
     {path:"form-classe" ,component:FormClasseComponent},
     {path:"" ,redirectTo:"/list-classe",pathMatch:"full"},

   


];  



