import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MATIERE_ROUTES } from './matiere/matiere.routes';
import { FooterComponent } from './footer/footer.component';



export const APP_ROUTES: Routes = [
  {path:"classies",
    loadChildren:() => import("./classies/classe.routes").then((m) => m.CLASSE_ROUTES)
  },
  {path:"matiere",
    loadChildren:() => import("./matiere/matiere.routes").then((m) => m.MATIERE_ROUTES)
  },
  
  {path:"home",component:HomeComponent},
  {path:"", redirectTo:"/home",pathMatch:"full"},

];