import { Routes } from '@angular/router';
import { MatiereComponent } from '../matiere/matiere.component';


export const MATIERE_ROUTES: Routes = [

{path:"liste-matieres",component:MatiereComponent},
{path:"form-matieres",component:MatiereComponent},
{path:"",component:MatiereComponent},
];
