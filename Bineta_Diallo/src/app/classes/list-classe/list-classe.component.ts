import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-classe',
  imports: [],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent {
  title:string=""

  constructor(private route:Router){
    console.log("constructeur")
  }


  addClasse(){

   return this.route.navigate(["/classes/form-classe"])

  }



}
