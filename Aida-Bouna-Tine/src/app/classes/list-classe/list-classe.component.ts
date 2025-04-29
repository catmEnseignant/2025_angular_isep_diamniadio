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
  classes:any
  nbrClasse:number = 0
  
   constructor(private route:Router,private classeService:ClasseServiceService){
    console.log("Bouna fall")
  }
  ngOnInit(){
    this.classes= this.classeService.getClasse()
    this.nbrClasse=this.classes.length
    console.log(this.nbrClasse)
    // console.log(this.classes)
    // console.log("composants initialiser")
    // let result=3*3+3
    // console.log('lle resultat est'+ result)
  }
 
  addClasse(){
    console.log("add initialiser")
    return this.route.navigate (["classes/form-classe"])
  }
 
  
 
  }
