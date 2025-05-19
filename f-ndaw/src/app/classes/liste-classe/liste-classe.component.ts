import { CommonModule } from '@angular/common';
import { ClasseServiceService } from '../../services/classes/classe-service.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-classe',
  imports: [CommonModule,],
  templateUrl: './liste-classe.component.html',
  styleUrls: ['./liste-classe.component.css'] // ✅ ici c'est bien "styleUrls"
})
export class ListeClasseComponent implements OnInit{
  classes :any

  constructor(private route: Router ,private classeService : ClasseServiceService) {
    console.log("constructeur");
  }
  ngOnInit(): void {
     this.classeService.getClasses().subscribe(
    (response) =>{
      console.log("response")
     },
    (error) =>{
      console.log("error")
    }
)
     //console.log(this.classes)
    }


  addClass() {
   return this.route.navigate(["classes/form-classe"]);
  }


}

