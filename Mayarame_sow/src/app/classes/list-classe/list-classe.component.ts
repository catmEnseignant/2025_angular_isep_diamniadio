import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-list-classe',
  imports: [],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent {


constructor(private roote:Router){
  console.log("constructeur")
}


addclasse(){
  return this.roote.navigate(["classes/form-classe"])

}

}
