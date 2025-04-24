import { Routes } from '@angular/router';
import { ClassesComponent } from '../classes/classes.component';
import { Component } from '@angular/core';


export const CLASSE_ROUTES: Routes = [
  { path: 'list-classe', component: ClassesComponent }, 
  {path:"form-classe" , component:ClassesComponent},
  {path:"./", component:ClassesComponent},
];