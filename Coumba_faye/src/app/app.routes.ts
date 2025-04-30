import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    
    {path:"classes", loadChildren:() => import("./classes/classes.routes").then((m) => m.CLASSES_ROUTES)},    
    
    {path:"matieres", loadChildren:() => import("./matieres/matieres.routes").then((m) => m.MATIERES_ROUTES)},    
    
    {path:"home", component:HomeComponent},

    { path:"",redirectTo:"/home",pathMatch:"full"},
   


];
