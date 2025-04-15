import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



export const routes: Routes = [
    {path: 'class', loadChildren:() => import("./Class/class.routes").then((m)=>m.ClassRoutes) 
        
    },
    {path: '', component: HomeComponent},
];
