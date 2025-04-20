import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const APP_ROUTES: Routes = [
    {path:"classes",
      loadChildren:() => import("./classes/classes.routes").then((m) => m.CLASSE_ROUTES),
    },
    {path:"", component:HomeComponent},
];
