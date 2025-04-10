import { ClasseComponent } from './classe/classe.component';
import { Routes } from '@angular/router';
import path from 'path';
import { MatiereComponent } from './matiere/matiere.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = 
[
    {path:"liste-classes", component:ClasseComponent},
    {path:"liste-matieres", component:MatiereComponent},
    {path:"", component:ContactComponent}
];
