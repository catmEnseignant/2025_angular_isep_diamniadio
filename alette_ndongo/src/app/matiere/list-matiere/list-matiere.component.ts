import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-matiere',
  imports: [],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent {
  a=3   
  constructor( private route:Router){
    console.log("constructeur")
  }
  addMatiere(){
    return this.route.navigate(["./matiere/form-matiere"])

  }
   

}