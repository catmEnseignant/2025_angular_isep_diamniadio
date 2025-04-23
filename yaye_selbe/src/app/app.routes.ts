import { Routes } from '@angular/router';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    {path:"classes",
        loadChildren:()=>import("./classes/classes.routes").then((m) => m.CLASSES_ROUTES)
    },
    {path:"matieres",

        loadChildren:()=>import("./matieres/matieres.routes").then((m) => m.MATIERE_ROUTES)
    },
   
    {path:"",component:HomeComponent},
];