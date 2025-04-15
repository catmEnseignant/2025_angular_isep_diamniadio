import { Routes } from '@angular/router';
import { ClasseComponent } from './classe/classe.component';
import { MatieresComponent } from './matieres/matieres.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:"Liste-classes",component:ClasseComponent},
    {path:"Liste-matieres",component:MatieresComponent},
    {path:"",component:ClasseComponent},
];
