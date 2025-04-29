import { Routes } from '@angular/router';
import { FormClasseComponent } from './form-classe/form-classe.component';
import { ListClasseComponent } from './list-classe/list-classe.component';

export const CLASSES_ROUTES: Routes = [
{path:"list-classe",component:ListClasseComponent},
{path:"form-classe",component:FormClasseComponent},
{path:"",redirectTo:"/list-classe",pathMatch:"full"},


];

