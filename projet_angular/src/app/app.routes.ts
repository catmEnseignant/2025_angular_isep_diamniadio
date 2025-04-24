import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import path from 'path';
import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';


export const APP_ROUTES: Routes = [
    { path:"classe",
        loadChildren: () => import("./classes/classes.routes").then((m) => m.CLASSE_ROUTES),
    },
    
    {path:"",component:HomeComponent},

   { path:"matieres",
    loadChildren: () => import("./matieres/matieres.routes").then((m) => m.MATIERE_ROUTES), 
   },
   
];

