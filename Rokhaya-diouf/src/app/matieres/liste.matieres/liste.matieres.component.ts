import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste.matieres',
  imports: [],
  templateUrl: './liste.matieres.component.html',
  styleUrl: './liste.matieres.component.css'
})
export class ListeMatieresComponent {
  constructor(private route:Router){
    console.log("constructeur")
  }

  addClasse(){
    return this.route.navigate(["matieres/form-matieres"])
    console.log("addClasse")
  }
  
}
