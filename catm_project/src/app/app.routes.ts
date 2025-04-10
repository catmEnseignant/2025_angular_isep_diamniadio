import {RouterModule, Routes} from '@angular/router';
import {ClasseComponent} from './classe/classe.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: 'classe', component:ClasseComponent
  },
  { path: '', redirectTo: 'classe', pathMatch: 'full' },
  { path: '**', redirectTo: 'classe' }
];

