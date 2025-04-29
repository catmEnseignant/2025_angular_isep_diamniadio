import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';


@Component({
  selector: 'app-liste-matiere',
  imports :[CommonModule],
  templateUrl: './liste-matiere.component.html',
  styleUrls: ['./liste-matiere.component.css']
})
export class ListeMatiereComponent implements OnInit {
  matieres: any
  coefficient: number = 0;

  constructor(private route:Router,private matiereService: MatiereServiceService) {
    console.log("constructor")
  }

  ngOnInit() {
    this.matieres = this.matiereService.getMatiere(); // assurez-vous que cette méthode existe
    this.coefficient = this.matieres.length;
    console.log(this.coefficient)
  }

  addMatiere(){
    console.log("add initialiser")
    return this.route.navigate(["matieres/form-matiere"])
    
  }
}
