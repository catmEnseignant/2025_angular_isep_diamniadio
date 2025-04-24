import { Routes } from '@angular/router';
import { MatiereComponent } from '../matiere/matiere.component';
import { ListClasseComponent } from '../classes/list-classe/list-classe.component';
import { ListMatiereComponent } from './list-matiere/list-matiere.component';
import { FormMatiereComponent } from './form-matiere/form-matiere.component';

export const MATIERES_ROUTES: Routes = [
    {path:"list-matiere",component:ListMatiereComponent},
    {path:"form-matiere",component:FormMatiereComponent},
    {path:"",component:MatiereComponent},
];
