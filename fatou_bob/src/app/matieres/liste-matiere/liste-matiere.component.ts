import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-liste-matiere',
  imports: [CommonModule,],
  templateUrl: './liste-matiere.component.html',
  styleUrl: './liste-matiere.component.css'
})
export class ListeMatiereComponent implements OnInit{
  matieres:any
  nombres_eleve:number = 0

  constructor(private route:Router,private matiereService: MatiereServiceService){
    console.log("constructeurr")
  }

  ngOnInit(){
     this.matiereService.getMatieres().subscribe(
    (response) => {
      this.matieres = response
      console.log(this.matieres.length)
    },
    (error) => {
      console.log(error )
    },
  )
    //this. nombres_eleve = this.matieres.length
    //console.log(this.nombres_eleve)
  } 

  editMatiere(editMatiere:any){
    console.log(editMatiere)
    editMatiere = JSON.stringify(editMatiere)
    localStorage.setItem("curentMatiere",editMatiere)
    localStorage.setItem("editMatiere","1")
    return this.route.navigate(["/matieres/form-matiere"])
  
  }
  addMatiere(){
    //console.log("add initialiser")
    localStorage.setItem("editMatiere","0")
    return this.route.navigate(["/matieres/form-matiere"])
     
  }
  deleteMatiere(matiere:any){
    let sup = confirm("Voulez vous suprimer")
    if (sup){
      this.matiereService.deleteMatieres(matiere.id).subscribe(
        (response) => {
          alert("matiere bien supprimer")
         
        },
        (error) => {
          console.log(error )
        },
      )
    }
    console.log(matiere)
  }

}
