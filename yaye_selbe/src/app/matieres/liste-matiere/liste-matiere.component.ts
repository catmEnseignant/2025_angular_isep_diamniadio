import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-matiere',
  imports: [],
  templateUrl: './liste-matiere.component.html',
  styleUrl: './liste-matiere.component.css'
})
export class ListeMatiereComponent {
  constructor(private route:Router){
    console.log("constructeur")
  }
  addClasse(){
    return this.route.navigate(["matieres/form-matiere"])
    
  }

}
