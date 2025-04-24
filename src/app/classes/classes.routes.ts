import { Routes } from '@angular/router';
import { ClasseComponent } from '../classe/classe.component';
import { MatiereComponent } from '../matiere/matiere.component';
import { AppComponent } from '../app.component';
import { ListClasseComponent } from './list-classe/list-classe.component';




export const APP_ROUTES: Routes = [
    
     { path:"list-classes" ,component:ClasseComponent},
     {path:"form-classe" ,component:ClasseComponent},
     {path:"" ,component:ClasseComponent},

   


];  



