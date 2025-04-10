import { Routes } from '@angular/router';

import { ClasseComponent } from './classe/classe.component';
import { MatieresComponent } from './matieres/matieres.component';

//creer des router et les importer
export const routes: Routes = [
    {path:"liste-classes",component:ClasseComponent},
    {path:"liste-matieres",component:MatieresComponent},
    {path:"",component:ClasseComponent}
];
