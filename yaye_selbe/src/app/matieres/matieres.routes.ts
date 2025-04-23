import { Routes } from '@angular/router';
import { ClasseComponent } from '../classe/classe.component';
import { MatiereComponent } from '../matiere/matiere.component';


export const MATIERE_ROUTES: Routes = [
    {path:"liste-matiere",component:MatiereComponent},
    {path:"form-matiere",component:MatiereComponent},
   
    
    
   
    {path:"",component:MatiereComponent},
];