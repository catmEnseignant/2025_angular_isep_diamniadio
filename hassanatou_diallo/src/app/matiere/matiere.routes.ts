import { Routes } from '@angular/router';
import { ClassesComponent } from '../classes/classes.component';
import { Component } from '@angular/core';
import { MatieresComponent } from '../matieres/matieres.component';


export const MATIERE_ROUTES: Routes = [
  { path: 'list-matiere', component: MatieresComponent }, 
  {path:"./", component:MatieresComponent},
];