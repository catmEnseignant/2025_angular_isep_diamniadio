import { Component, OnInit } from '@angular/core';
import { Router } from'@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-liste-classe',
  imports: [CommonModule ],
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
    this.classeService.getClasses().subscribe(
      (response) =>{
        this.classes = response

        console.log(response)
      },
      (error) =>{
        console.log(error)
      },
      
    )
   // this.nombre_eleve = this.classes.length
    //console.log(this.nombre_eleve)

  }

  editClasse(editClasse: any){
    console.log(editClasse)
    editClasse = JSON.stringify(editClasse)
    localStorage.setItem("curentClasse", editClasse)
    localStorage.setItem("editClasse", "1")
    return this.route.navigate(["/classes/form-classe"])
  }

  addClasse(){

    localStorage.setItem("editClasse", "0")
    //console.log("add initialiser")
    return this.route.navigate(["/classes/form-classe"])
  }


}
