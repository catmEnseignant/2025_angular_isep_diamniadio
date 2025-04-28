import { Routes } from "@angular/router";
import { FormMatiereComponent } from "./form-matiere/form-matiere.component";
import { ListMatiereComponent } from "./list-matiere/list-matiere.component";

export const MATIERE_ROUTES : Routes = [
    {path:"list-matiere", component:ListMatiereComponent},
    {path:"form-matiere", component:FormMatiereComponent},
    {path:"", redirectTo:"/list-matiere", pathMatch:"full"}
]