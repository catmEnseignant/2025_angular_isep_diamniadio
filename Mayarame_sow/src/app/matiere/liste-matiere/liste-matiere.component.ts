import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-matiere',
  imports: [CommonModule],
  templateUrl: './liste-matiere.component.html',
  styleUrl: './liste-matiere.component.css'
})
export class ListeMatiereComponent implements OnInit {

  matiere:any
  nombre:number = 0
  constructor(private roote:Router, private matiereService: MatiereServiceService ){
    console.log("constructeur")
  }
ngOnInit(){
  this.matiere = this.matiereService.getMatiere()
  this.nombre = this.matiere.length
  console.log(this.nombre)

}
addmatiere(){
  return this.roote.navigate(["matiere/form-matiere"])
}
}
