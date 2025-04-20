import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {path:"classes",
        loadChildren:() => import("./classes/classes.routes").then((c) => c.CLASSE_ROUTES),
    },
    {path:"matieres",
       loadChildren:() => import("./matieres/matieres.routes").then((m) => m.MATIERE_ROUTES),
    },
    {path:"", component:HomeComponent}
];
 