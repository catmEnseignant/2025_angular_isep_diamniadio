import { Routes } from '@angular/router';
import { ClasseComponent } from '../classe/classe.component';


export const CLASSE_ROUTES: Routes = [
  {path:"list-classes",component:ClasseComponent},
  {path:"form-classes",component:ClasseComponent},
  {path:"",component:ClasseComponent},



];
