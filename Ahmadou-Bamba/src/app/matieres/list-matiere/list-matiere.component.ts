import { Component, OnInit } from '@angular/core';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-matiere',
  imports: [CommonModule],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent implements OnInit{

  matieres : any

  constructor (private route:Router,private matiereService: MatiereServiceService) {
    console.log("constructeur")
  }

  ngOnInit(){
    this.matiereService.getMatieres().subscribe(
      (response) : void => {

        this.matieres = response
        console.log(response)
      },

      (error) : void => {
        console.log(error)
      }
        
    )

    

  }

  public addMatieres () {
    
  }
}
