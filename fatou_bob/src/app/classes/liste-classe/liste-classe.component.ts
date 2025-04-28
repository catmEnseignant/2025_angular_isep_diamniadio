import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-classe',
  imports: [],
  templateUrl: './liste-classe.component.html',
  styleUrl: './liste-classe.component.css'
})
export class ListeClasseComponent {


constructor(private route:Router){
  console.log("constructeurr")
}

  addClasse(){
    return this.route.navigate(["/classes/form-classe"])
   
  }

}
