import { Routes } from '@angular/router';
import { MatiereComponent } from '../matiere/matiere.component';
import { AppComponent } from '../app.component';



export const MATIERES_ROUTES : Routes = [
    {path:"liste-matiere",component:MatiereComponent},
    {path:"form-matiere",component:MatiereComponent},


    {path:"",redirectTo:"/liste-matiere",pathMatch:"full"}
   


];