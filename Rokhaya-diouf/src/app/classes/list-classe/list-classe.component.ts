import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-classe',
  imports: [CommonModule],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent implements OnInit {

  classes:any //any la variable prent n'importe quel type
  constructor(private route:Router,private classeService:ClasseServiceService){
    console.log("rokhaya-diouf")
  }

  // ngOnInit(){
  //   console.log("composant initialiser")
  //   let result=3 * 3 +3
  //   console.log("le rresul est"+ result)
  // }
  
  ngOnInit(){
    this.classes=this.classeService.getClasse()
    console.log(this.classes.length)
  }

  addClasse(){
    console.log("add initialiser")
    return this.route.navigate(["classes/form-classe"])
  }

  

}
