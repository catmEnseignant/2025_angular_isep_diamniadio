import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {path:"classes",
      loadChildren:() => import("./classes/classes.routes").then((m) => m.CLASSE_ROUTES),
    },

    {path:"matiere",
      loadChildren:() => import("./matiere/matiere.route").then((m) => m.MATIERES_ROUTES)
    },

  
    
    {path:"home", component:HomeComponent},

    {path:"",redirectTo:"/home",pathMatch:"full"},
];
