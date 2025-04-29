import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClasseServiceService } from '../../services/classses/classe-service.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-liste-classe',
  imports: [CommonModule],
  templateUrl: './liste-classe.component.html',
  styleUrl: './liste-classe.component.css'
})
export class ListeClasseComponent implements OnInit {

 classes:any
 nombres_eleve :number = 0

  constructor(private route:Router,private classeService: ClasseServiceService){
    console.log("constructor")
  }

  ngOnInit(){
    this.classes= this.classeService.getClasse()
    this.nombres_eleve = this.classes.length
    console.log(this.nombres_eleve)
  }

  addClasse(){
    console.log("add initialiser")
    return this.route.navigate(["Classes/form-classe"])
    
  }

  

  

}
