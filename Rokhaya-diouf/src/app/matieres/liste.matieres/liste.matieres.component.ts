import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste.matieres',
  imports: [CommonModule],
  templateUrl: './liste.matieres.component.html',
  styleUrl: './liste.matieres.component.css'
})
export class ListeMatieresComponent {
  matieres:any //any la variable prent n'importe quel type
  constructor(private route:Router,private matiereService:MatiereServiceService){
    console.log("rokhaya-diouf")
  }

  // ngOnInit(){
  //   console.log("composant initialiser")
  //   let result=3 * 3 +3
  //   console.log("le rresul est"+ result)
  // }
  
  ngOnInit(){
    this.matieres=this.matiereService.getClasse()
    console.log(this.matieres.length)
  }

  addClasse(){
    console.log("add initialiser")
    return this.route.navigate(["matieres/form-matieres"])
  }
  
}
