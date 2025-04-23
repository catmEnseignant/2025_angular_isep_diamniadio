import { Routes } from '@angular/router';
import { ClasseComponent } from '../classe/classe.component';
import { AppComponent } from '../app.component';



export const CLASSES_ROUTES : Routes = [
    {path:"liste-classe",component:ClasseComponent},
    {path:"form-classe",component:ClasseComponent},
    {path:"",component:AppComponent}
   
   
];

