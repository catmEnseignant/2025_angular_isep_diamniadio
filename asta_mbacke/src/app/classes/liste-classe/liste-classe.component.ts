import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-classe',
  imports: [CommonModule],
  templateUrl: './liste-classe.component.html',
  styleUrl: './liste-classe.component.css'
})
export class ListeClasseComponent implements OnInit{

  classes: any
  nombre_eleve: number = 0
  constructor(private route:Router, private classeService:ClasseServiceService){
    console.log("constructeurr")
  }

  
  ngOnInit(){
    this.classes = this.classeService.getClasse()
    this.nombre_eleve = this.classes.length
    console.log(this.nombre_eleve)

  }

  addClasse(){
    console.log("add initialiser")
    return this.route.navigate(["/classes/from-classe"])
  }


}
