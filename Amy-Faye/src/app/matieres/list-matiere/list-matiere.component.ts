import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';

@Component({
  selector: 'app-list-matiere',
  imports: [CommonModule],
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
      this.matieres = this.matiereService.getClasse()
      this.nbreMatiere = this.matieres.length
      console.log(this.nbreMatiere) 
    }
  

    addMatiere(){
      console.log("add initialiser")
      return this.route.navigate(["matieres/form-matieres"])
      //console.log("addMatiere")
    }
  

}
