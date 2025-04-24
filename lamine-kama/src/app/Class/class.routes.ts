import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListClassComponent } from './list-class/list-class.component';
import { FormClassComponent } from './form-class/form-class.component';


export const ClassRoutes: Routes = [
    {path: 'liste-class' , component: ListClassComponent},
    {path: 'form-class' , component: FormClassComponent},
    {path: '' , redirectTo:"/liste-class",pathMatch:"full"},
];
