import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-matiere',
  imports: [],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent {
   constructor(private route:Router){
      console.log("constructor")
    }

    addMatiere(){
      return this.route.navigate(["matieres/form-matieres"])
      console.log("addMatiere")
    }
  

}
