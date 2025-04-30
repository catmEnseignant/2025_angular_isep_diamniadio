import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-matiere',
  imports: [CommonModule],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent implements OnInit {
  matieres:any
  nombreMatiere:number = 0
  constructor(private route:Router, private matiereService: MatiereServiceService){
    console.log("Coumba Faye ")
  }

  ngOnInit() {
    this.matieres = this.matiereService.getMatiere()
    
  }
  addClasse(){
    return this.route.navigate(["matieres/form-matiere"])
    
  }

}
