import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {path:"classes",
        loadChildren:()=>import("./classes/classes.routes").then((m) =>m.CLASSE_ROUTES)
    },

    {path:"lesmatieres",
        loadChildren:()=>import("./lesmatieres/lesmatieres.routes").then((m) =>m.MATIERES_ROUTES)
    },

    {path:"home",component:HomeComponent},

    {path:"",redirectTo:"/home",pathMatch:"full"}
];
