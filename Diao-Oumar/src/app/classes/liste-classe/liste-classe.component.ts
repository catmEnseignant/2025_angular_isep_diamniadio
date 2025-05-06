import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassesServicesService } from '../../services/classes/classes-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-classe',
  imports: [CommonModule],
  templateUrl: './liste-classe.component.html',
  styleUrl: './liste-classe.component.css'
})
export class ListeClasseComponent implements OnInit{
  classes : any;
  nbreClasse : number = 0;
  constructor (private route:Router, private classeServices:ClassesServicesService) {
    console.log("constructeur")
  }
  ngOnInit(){
    this.classes = this.classeServices.getClasses();
    // console.log(this.classes.length);
    this.nbreClasse = this.classes.length;
  }
  
  public addClasse () {
    this.route.navigate(["classes/form-classe"]);
    console.log("this.addClasse")
  }

}

