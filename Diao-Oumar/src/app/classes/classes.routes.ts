import { Routes } from "@angular/router";
import { FormClasseComponent } from "./form-classe/form-classe.component";
import { ListeClasseComponent } from "./liste-classe/liste-classe.component";

export const CLASSE_ROUTES : Routes = [
    {path:"list-classe", component:ListeClasseComponent},
    {path:"form-classe", component:FormClasseComponent},
    {path:"", redirectTo:"/list-classe", pathMatch:"full"},
]