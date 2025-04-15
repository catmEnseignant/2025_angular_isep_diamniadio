import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListClassComponent } from './list-class/list-class.component';
import { FormClassComponent } from './form-class/form-class.component';
import { ClassesComponent } from '../classes/classes.component';
import { MatieresComponent } from '../matieres/matieres.component';


export const ClassRoutes: Routes = [
    {path: 'liste-class' , component: ClassesComponent},
    {path: 'matieres' , component: MatieresComponent},
    {path: '' , component: FormClassComponent},
];
