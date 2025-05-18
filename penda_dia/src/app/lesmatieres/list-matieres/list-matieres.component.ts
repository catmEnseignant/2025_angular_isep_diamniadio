import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatieresServiceService } from '../../services/matieres/matieres-servise.service';
@Component({
  selector: 'app-list-matieres',
  imports: [CommonModule],
  templateUrl: './list-matieres.component.html',
  styleUrl: './list-matieres.component.css'
})
export class ListMatieresComponent {
  matieres: any;
 constructor( private route: Router, private matiereService: MatieresServiceService) {
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
    return this.route.navigate(["lesmatieres/form-matieres"]);
   
  }
}
