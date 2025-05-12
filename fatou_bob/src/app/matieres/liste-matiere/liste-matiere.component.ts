import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-matiere',
  imports: [CommonModule,],
  templateUrl: './liste-matiere.component.html',
  styleUrl: './liste-matiere.component.css'
})
export class ListeMatiereComponent implements OnInit{
  matieres:any
  nombres_eleve:number = 0

  constructor(private route:Router,private classeService: MatiereServiceService){
    console.log("constructeurr")
  }

  ngOnInit(){
     this.classeService.getMatieres().subscribe(
    (response) => {
      this.matieres = response
      console.log("success")
    },
    (error) => {
      console.log(error )
    },
  )
    //this. nombres_eleve = this.matieres.length
    //console.log(this.nombres_eleve)
   

   
    
  }
  
    addMatiere(){
      console.log("add initialiser")
      return this.route.navigate(["/matieres/form-matiere"])
     
    }
    
  
  
  
  

}
