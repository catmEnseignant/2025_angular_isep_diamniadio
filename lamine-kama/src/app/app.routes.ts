import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { MatieresComponent } from './matieres/matieres.component';

export const routes: Routes = [
    {path: 'matieres', component: MatieresComponent},
    {path: 'classes', component: ClassesComponent},
    {path: '', component: ClassesComponent},
];
