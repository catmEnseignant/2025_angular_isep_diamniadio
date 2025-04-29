import { Routes } from '@angular/router';
import { ListClasseComponent } from './list-classe/list-classe.component';
import { FormClasseComponent } from './form-class/form-class.component';


export const CLASSES_ROUTES: Routes = [
  {path:"list-classes",component:ListClasseComponent},
  {path:"form-classes",component:FormClasseComponent},
  {path:"",redirectTo:"/list-classes",pathMatch:"full"},

];

