import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  { path:"classes",
    loadChildren:() => import("./classes/classes.routes").then((m) => m.CLASSES_ROUTES),
  },
  {path:"",component:HomeComponent},
];

