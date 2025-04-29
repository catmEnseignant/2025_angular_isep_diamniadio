import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListMatiereComponent } from './matieres/list-matiere/list-matiere.component';
import { ListClasseComponent } from './classes/list-classe/list-classe.component';
import { FormClasseComponent } from './classes/form-classe/form-classe.component';

export const APP_ROUTES: Routes = [
  {
    path: 'classes',
    loadChildren: () =>
      import('./classes/classes.routes').then((m) => m.CLASSE_ROUTES)
  },
  { path: 'matieres', component: ListMatiereComponent },
  { path: 'classes', component: ListClasseComponent },
  { path: 'classes/form-classe', component: FormClasseComponent },

  { path: '', component: HomeComponent },
];
