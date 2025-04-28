import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-liste-classe',
  imports: [],
  templateUrl: './liste-classe.component.html',
  styleUrl: './liste-classe.component.css'
})
export class ListeClasseComponent {

 a=3

  constructor(private route:Router){
    console.log("constructor")
  }

  addClasse(){
    return this.route.navigate(["Classes/form-classe"])
    
  }

  

}
