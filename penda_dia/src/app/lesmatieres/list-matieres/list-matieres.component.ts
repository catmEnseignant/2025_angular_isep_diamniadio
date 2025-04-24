import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-matieres',
  imports: [],
  templateUrl: './list-matieres.component.html',
  styleUrl: './list-matieres.component.css'
})
export class ListMatieresComponent {

  constructor(private route:Router){
    console.log("contructeur");
  }
  
  addClasse(){
    return this.route.navigate(["lesmatieres/form-matieres"]);
   
  }
}
