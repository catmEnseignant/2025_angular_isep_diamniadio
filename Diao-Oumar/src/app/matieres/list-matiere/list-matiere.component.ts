import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-matiere',
  imports: [],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent {

  constructor(private route:Router) {
    console.log("constructeur")
  }
  public addMatieres () {
    this.route.navigate(["matieres/form-matiere"]);
    console.log("this.addMatieres")
  }
}
