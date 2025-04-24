import { Routes } from '@angular/router';
import { MatiereComponent } from '../matiere/matiere.component';


export const MATIERES_ROUTES: Routes = [
    {path:"liste-matiere",component:MatiereComponent},
    {path:"form-matiere",component:MatiereComponent},
    {path:"",component:MatiereComponent}
   
];



