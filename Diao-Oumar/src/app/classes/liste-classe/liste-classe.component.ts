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
  constructor (private route:Router, private classeServices:ClassesServicesService) {
    console.log("constructeur")
  }
  ngOnInit(){
    this.classeServices.getClasses().subscribe(
      (reponse) : void => {
        this.classes = reponse
        console.log(reponse)
      },
      (error) : void => {
        console.log(error);
      }
    );
  }
  
  public addClasse () {
    localStorage.setItem("editClasse", "0");
    this.route.navigate(["classes/form-classe"]);
    console.log("this.addClasse")
  }

  public editClasse (id:any) {
    console.log(id);
    id = JSON.stringify(id);
    localStorage.setItem("diao" , id);
    localStorage.setItem("editClasse", "1");
    return this.route.navigate(["classes/form-classe"]);
  }

}

