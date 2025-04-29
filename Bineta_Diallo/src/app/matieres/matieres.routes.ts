import { Routes } from '@angular/router';
import { MatiereComponent } from '../matiere/matiere.component';

export const MATIERE_ROUTES: Routes = [
  {path:"list-matiere",component:MatiereComponent },
  {path:"form-matiere",component:MatiereComponent},
  {path:"",component:MatiereComponent}
];
