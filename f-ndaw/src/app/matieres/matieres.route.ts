import { Routes } from '@angular/router';
import { MatiereComponent } from '../matiere/matiere.component';
import { HomeComponent } from '../home/home.component';







export const Matiere_ROUTES: Routes = [
  {path:"liste-matiere",component:MatiereComponent},

  {path:"",component:HomeComponent},


 ];
