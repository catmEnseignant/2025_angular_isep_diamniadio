import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-classe',
  imports: [],
  templateUrl: './liste-classe.component.html',
  styleUrl: './liste-classe.component.css'
})
export class ListeClasseComponent {
  
  constructor (private route:Router) {
    console.log("constructeur")
  }

  public addClasse () {
    this.route.navigate(["classes/form-classe"]);
    console.log("this.addClasse")
  }
}

