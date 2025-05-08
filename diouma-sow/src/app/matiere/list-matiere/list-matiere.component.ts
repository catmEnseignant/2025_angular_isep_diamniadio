import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereServiceService} from '../../services/matiere/matiere-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-matiere',
  imports: [CommonModule],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent {
  matiere:any
   nombres_eleve :number = 0
  
    constructor(private route:Router,private matieresService: MatiereServiceService){
      console.log("constructor")
    }
  
    ngOnInit(){
      this.matiere= this.matieresService.getMatieres()
      let test = this.matiere[0].niveau
      console.log(this.matiere[0].niveau)
      this.nombres_eleve = this.matiere.length
      console.log(this.nombres_eleve)
    }
  
    addMatiere(){
      console.log("add initialiser")
      return this.route.navigate(["matiere/form-matiere"])
    
  }
   

}
