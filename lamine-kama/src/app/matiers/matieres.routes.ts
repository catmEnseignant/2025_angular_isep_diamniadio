import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormMatiereComponent } from './form-matiere/form-matiere.component';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';


export const matiereRoutes: Routes = [
    {path: 'liste-matieres' , component: ListMatiereComponent},
    {path: 'form-matieres' , component: FormMatiereComponent},
    {path: '' , redirectTo:"/liste-class",pathMatch:"full"},
];
