import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-liste.matieres',
  imports: [CommonModule ],
  templateUrl: './liste.matieres.component.html',
  styleUrl: './liste.matieres.component.css'
})
export class ListeMatieresComponent implements OnInit{
  matieres:any //any la variable prent n'importe quel type
  constructor(private route:Router,private matiereService:MatiereServiceService){
    console.log("rokhaya-diouf")
  }

  // ngOnInit(){
  //   console.log("composant initialiser")
  //   let result=3 * 3 +3
  //   console.log("le rresul est"+ result)
  // }

  // ngOnInit(){
  //   // this.matieres=this.matiereService.getClasse()
  //   // console.log(this.matieres.length)
  // }

  ngOnInit(){
    // this.classes=
    this.matiereService.getMatieres().subscribe(
      (response) => {
        this.matieres=response
    // console.log(response)
    },
    (error)=> {
      console.log(error)
      }
  )
    //subscrite fonction qui prend en parametre 2 fonction 
    // console.log(this.classes.length)
  }

  // addClasse(){
  //   console.log("add initialiser")
  //   return this.route.navigate(["matieres/form-matieres"])
  // }
  
    addClasse(){
    // console.log("add initialiser")
    localStorage.setItem("editMatiere", "0")
    return this.route.navigate(["matieres/form-matiere"])
  }


editMatiere(editMatiere:any){
  console.log(editMatiere);
  editMatiere=JSON.stringify(editMatiere)
  localStorage.setItem("currentMatiere", editMatiere)
  localStorage.setItem("editMatiere","1")
  
  //comme que current ne peut ps Stoker un objet on converti editClasse a un caractere(dans le console log )
  //onInit permet de initialiser
  return this.route.navigate(["matieres/form-matiere"])
}

}
