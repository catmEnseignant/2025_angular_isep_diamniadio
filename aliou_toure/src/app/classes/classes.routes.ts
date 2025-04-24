import { Routes } from '@angular/router';
import { ListClasseComponent } from './list-classe/list-classe.component';
import { FormClasseComponent } from './form-classe/form-classe.component';

export const CLASSE_ROUTES: Routes = [
  { path: 'list', component: ListClasseComponent },
  { path: 'form', component: FormClasseComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];
