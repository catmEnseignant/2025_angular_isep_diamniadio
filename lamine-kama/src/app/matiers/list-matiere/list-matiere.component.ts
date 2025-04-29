import { Component, OnInit } from '@angular/core';
import { MatiereServiceService } from '../../services/matieress/matiere-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-matiere',
  imports: [CommonModule],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent implements OnInit{

  matieres:any
  nbreMatiere:number = 0 
  constructor(private matiereService: MatiereServiceService){
    console.log("lamine kama")
   }

  ngOnInit(){
    this.matieres = this.matiereService.getMatieres()
    this.nbreMatiere = this.matieres.length
    console.log(this.nbreMatiere)
   
  }
}
