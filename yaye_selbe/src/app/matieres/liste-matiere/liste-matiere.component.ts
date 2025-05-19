import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-matiere',
  imports: [CommonModule],
  templateUrl: './liste-matiere.component.html',
  styleUrl: './liste-matiere.component.css'
})
export class ListeMatiereComponent implements OnInit{
 matieres:any
   nombre_jour:number = 0
 
   constructor(private route: Router,private matiereService: MatiereServiceService) {
     console.log('selbe yooum');
   }
   ngOnInit(){
    this.matieres=this.matiereService.getMatiere()
   
     
   }
  addClasse(){
    return this.route.navigate(["matieres/form-matiere"])
    
  }

}
