import { Routes } from '@angular/router';
import { ListeMatieresComponent } from './liste.matieres/liste.matieres.component';
import { FormClasseComponent } from '../classes/form-classe/form-classe.component';


export const MATIERE_ROUTES: Routes = [

{path:"liste-matieres",component:ListeMatieresComponent},
{path:"form-matieres",component:FormClasseComponent},

];
