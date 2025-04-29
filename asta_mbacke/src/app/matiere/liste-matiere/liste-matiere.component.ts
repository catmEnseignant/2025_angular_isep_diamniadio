import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';

@Component({
  selector: 'app-liste-matiere',
  imports: [CommonModule],
  templateUrl: './liste-matiere.component.html',
  styleUrl: './liste-matiere.component.css'
})
export class ListeMatiereComponent implements OnInit {

  matieres:any
  coefficient:number = 0


  constructor(private route:Router, private matiereService:MatiereServiceService){

    console.log("constructeurr")
  }

  
  ngOnInit(){
    this.matieres = this.matiereService.getClasse()
    this.coefficient = this.matieres.length
    console.log(this.coefficient)

  }

  addMatiere(){
    console.log("add initialiser")
    return this.route.navigate(["/matiere/form-matiere"])
  }

}
