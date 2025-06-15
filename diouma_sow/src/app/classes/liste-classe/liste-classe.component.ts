import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';


@Component({
  selector: 'app-liste-classe',
  imports: [CommonModule,],
  templateUrl: './liste-classe.component.html',
  styleUrl: './liste-classe.component.css'
})
export class ListeClasseComponent implements OnInit{
   classes:any
   nombres_eleve:number = 0


  constructor(private route:Router,private classeService: ClasseServiceService){
    console.log("constructeurr")
  }
  ngOnInit(){
   this.classeService.getClasses().subscribe(
      (response) => {
        this.classes = response
        console.log(this.classes.length)
      },
      (error) => {
        console.log(error )
      },
    )
    //this. nombres_eleve = this.classes.length
    //console.log(this.nombres_eleve) 
    
  }
  editClasse(editClasse:any){
    console.log(editClasse)
    editClasse = JSON.stringify(editClasse)
    localStorage.setItem("curentClasse",editClasse)
    localStorage.setItem("editClasse","1")
    return this.route.navigate(["/classes/form-classe"])

  }
  addClasse(){
    //console.log("add initialiser")
    localStorage.setItem("editClasse","0")
    return this.route.navigate(["/classes/form-classe"])
  }
  deleteClasse(classe:any){
    let sup = confirm("Voulez vous suprimer")
    if (sup){
      this.classeService.deleteClasses(classe.id).subscribe(
        (response) => {
          alert("classe bien supprimer")
         
        },
        (error) => {
          console.log(error )
        },
      )
    }
    console.log(classe)
  }
}
