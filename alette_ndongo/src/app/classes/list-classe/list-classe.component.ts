import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-liste-classe',
  imports: [CommonModule],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent implements OnInit {
 title:string=""
 classes:any
 nbrClass :number = 0

  constructor(private route:Router,private classeService: ClasseServiceService){
    console.log("constructor")
  }

  ngOnInit(){
    this.classes= this.classeService.getClasse()
    this.nbrClass = this.classes.length
    console.log(this.nbrClass)
  }

  addClasse(){
    console.log("add initialiser")
    return this.route.navigate(["Classes/form-classe"])
    
  }

  

  

}