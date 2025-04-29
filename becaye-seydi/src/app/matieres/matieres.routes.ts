import { Routes } from '@angular/router';
import { MatiereComponent } from '../matiere/matiere.component';
import { AppComponent } from '../app.component';
import { ListClasseComponent } from '../classes/list-classe/list-classe.component';
import { FormClasseComponent } from '../classes/form-classe/form-classe.component';



export const MATIERES_ROUTES : Routes = [
    {path:"liste-matiere",component:ListClasseComponent},
    {path:"form-matiere",component:FormClasseComponent},
    {path:"",redirectTo:"/liste-matiere",pathMatch:"full"}


];