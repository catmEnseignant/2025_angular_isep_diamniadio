import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';

@Component({
  selector: 'app-list-matiere',
  imports: [CommonModule],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent implements OnInit{
 matieres:any
  nbrClasse:number = 0
  constructor(private route:Router, private matiereService:MatiereServiceService){
    console.log("Bouna fall")
  }

ngOnInit(){
  this.matieres= this.matiereService.getClasse()
  this.nbrClasse=this.matieres.length
  console.log(this.nbrClasse)
  // console.log(this.classes)
  // console.log("composants initialiser")
  // let result=3*3+3
  // console.log('lle resultat est'+ result)
}




addClasse(){
  console.log("add initialiser")
  return this.route.navigate (["matieres/form-matiere"])
}

}
