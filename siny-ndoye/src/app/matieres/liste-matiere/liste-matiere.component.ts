import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-liste-matiere',
  imports :[CommonModule,],
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
    this.matiereService.getMatieres().subscribe(
      (response) => {
        this.matieres = response
        console.log(response)
      },
      (error)=> {
        console.log(error)
      }
    )
    //this.coefficient = this.matieres.length;
    //console.log(this.coefficient)
  }

  addMatiere(){
    console.log("add initialiser")
    return this.route.navigate(["matieres/form-matiere"])
    
  }
}
