import { Routes } from '@angular/router';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import { FormMatiereComponent } from './form-matiere/form-matiere.component';

export const CLASSE_ROUTES: Routes = [
  { path: 'list', component: ListMatiereComponent },
  { path: 'form', component:  FormMatiereComponent},
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];
