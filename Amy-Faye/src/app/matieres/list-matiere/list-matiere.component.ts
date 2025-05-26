import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-matiere',
  imports: [CommonModule ],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent implements OnInit {
   matieres:any
   nbreMatiere:number = 0
   constructor(private route:Router,private matiereService: MatiereServiceService){
      console.log("constructor")
    }

    ngOnInit() {
      this.matiereService.getClasse().subscribe(
        (response) =>{
          this.matieres = response

        },

        (error)=> {
          console.log(error)
        }
    )
      //this.nbreClass = this.classes.length
      //console.log(this.nbreClass)
    }

    editMatiere(editMatiere:any){
    console.log(editMatiere)
    editMatiere = JSON.stringify(editMatiere)
    localStorage.setItem("curentClasse", editMatiere)
    localStorage.setItem("editMatiere", "1")
    return this.route.navigate(["matieres/form-matiere"])
  }


    addMatiere(){
    //console.log("add initialiser")
    localStorage.setItem("editClasse", "0")
    return this.route.navigate(["matieres/form-matieres"])
      //console.log("addMatiere")
    }


}
