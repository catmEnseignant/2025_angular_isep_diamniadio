import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


export const APP_ROUTES: Routes = [
  { path:"classes",
    loadChildren:() => import("./classes/classes.routes").then((c) => c.CLASSES_ROUTES),
  },
  { path:"matiere",
    loadChildren:() => import("./matiere/matiere.routes").then((m) => m.MATIERE_ROUTES),
  },
  {path:"",component:HomeComponent},
];