import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import path from 'path';

export const APP_ROUTES: Routes = [
   {path:"Classes",
    loadChildren:() => import("./Classes/classes.routes").then((m) => m.CLASSES_ROUTES),  
    },
    {path:"matieres",
        loadChildren:()=> import("./matieres/matieres.routes").then((m) => m.MATIERES_ROUTES),
    },
    {path:"",component:HomeComponent},
];
