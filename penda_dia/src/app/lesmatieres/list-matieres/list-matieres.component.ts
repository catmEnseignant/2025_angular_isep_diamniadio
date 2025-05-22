import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatieresServiceService } from '../../services/matieres/matieres-servise.service';


@Component({
  selector: 'app-list-matieres',
  imports: [CommonModule],
  templateUrl: './list-matieres.component.html',
  styleUrl: './list-matieres.component.css'
})
export class ListMatieresComponent implements OnInit{
  matieres: any;
 constructor(private route: Router, private matiereService: MatieresServiceService) {
    console.log('constructeur');
  }
  
  
   ngOnInit(){
    this.matiereService.getMatieres().subscribe(
      (response) => {
        this.matieres = response
    },
    (error) => {
      console.log(error)
    }
    )
  }
  addMatiere(){
    localStorage.setItem("editMatiere","0");
    return this.route.navigate(["lesmatieres/form-matieres"]);
   
  }
 
  editMatiere(edit:any){
    console.log(edit)
    edit=JSON.stringify(edit)
    localStorage.setItem("matiereCourant",edit)
    localStorage.setItem("editMatiere","1")
    return this.route.navigate(["lesmatieres/form-matieres"]);
  }
  deleteMatiere(){
    return this.route.navigate(["lesmatieres/list-matieres"]);
  }
}
