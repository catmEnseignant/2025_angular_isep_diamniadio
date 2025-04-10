import { Routes } from '@angular/router';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:"liste-classe",component:ClasseComponent},
    {path:"liste-matiere",component:MatiereComponent},
    {path:"",component:ClasseComponent},
];

