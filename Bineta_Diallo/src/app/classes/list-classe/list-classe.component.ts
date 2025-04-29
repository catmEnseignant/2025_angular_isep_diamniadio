import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';


@Component({
  selector: 'app-list-classe',
  imports: [],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent {
  title:string=""

  constructor(private route:Router,private classeService: ClasseServiceService){
    console.log("Bineta Diallo")
  }


  addClasse(){

   return this.route.navigate(["/classes/form-classe"])

  }
  getClasse(){
    
  }




}
