import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatieresServicesService } from '../../services/matieres/matieres-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-matiere',
  imports: [CommonModule],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent implements OnInit{

  matieres : any;
  constructor(private route:Router, private matiereServices : MatieresServicesService) {
    console.log("constructeur")
  }
  ngOnInit () {
    this.matieres = this.matiereServices.getMatieres();
    console.log("Hello");
  }
  public addMatieres () {
    this.route.navigate(["matieres/form-matiere"]);
    console.log("this.addMatieres")
  }
}
