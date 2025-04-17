import { Routes } from '@angular/router';
import { ClasseComponent } from '../classe/classe.component';


export const CLASSE_ROUTES : Routes = [
   {path:"list-classe",component:ClasseComponent},
   {path:"form-classe",component:ClasseComponent},
   {path:"",component:ClasseComponent} 

];
