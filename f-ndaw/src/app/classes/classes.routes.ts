
import { Routes } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { ListeClasseComponent } from './liste-classe/liste-classe.component';
import { FormClasseComponent } from './form-classe/form-classe.component';



export const CLASSE_ROUTES: Routes = [
 {path:"liste-classe",component:ListeClasseComponent},
 {path:"form-classe",component:FormClasseComponent},
 {path:"",component:HomeComponent},


];

