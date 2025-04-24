import { Routes } from '@angular/router';
import { ClasseComponent } from './classe/classe.component';
import { MatiereComponent } from './matiere/matiere.component';
import { HomeComponent } from './home/home.component';
import { LessonComponent } from './lesson/lesson.component'; // 👈 Ajouté ici

export const APP_ROUTES: Routes = [
  {
    path: 'classes',
    loadChildren: () =>
      import('./classes/classes.routes').then((m) => m.CLASSE_ROUTES)
  },
  { path: 'matieres', component: MatiereComponent },
  { path: 'lessons', component: LessonComponent }, // 👈 Ajouté ici
  { path: '', component: HomeComponent },
];
