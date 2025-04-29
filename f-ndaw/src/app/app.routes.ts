
import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const App_Routes: Routes = [
 { path:"classes",
   loadChildren:()=> import("./classes/classes.routes").then((m) => m.CLASSE_ROUTES),
  },

  { path:"matieres",
    loadChildren:()=> import("./matieres/matieres.route").then((m) => m.Matiere_ROUTES),
   },


 {path:"home",component:HomeComponent},

{path:"",redirectTo:"/home",pathMatch:"full"}


];

