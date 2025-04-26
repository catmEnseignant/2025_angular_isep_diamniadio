import { Routes } from '@angular/router';
import { ClasseComponent } from '../classe/classe.component';
import { MatiereComponent } from '../matiere/matiere.component';
import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';


export const MATIERE_ROUTES: Routes = [
    {path:"liste-matiere",component:ListeMatiereComponent},
    {path:"form-matiere",component:ListeMatiereComponent},
    {path:"",component:MatiereComponent},
    
];