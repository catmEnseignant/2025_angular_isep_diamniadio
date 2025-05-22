import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseServiseService } from '../../services/classes/classes-servise.service';

@Component({
  selector: 'app-list-classe',
  imports: [CommonModule],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent  implements OnInit{
  classes: any;
  
  constructor( private route: Router, private classeService: ClasseServiseService) {
    console.log('constructeur');
  }

  
  ngOnInit(){
    this.classeService.getClass().subscribe(
      (response) => {
        this.classes = response
    },
    (error) => {
      console.log(error)
    }
    )
  }
   
  addClasse(){
    localStorage.setItem("editClasse","0");
    return this.route.navigate(["classes/form-classe"]);
  }
  editClasse(edit:any){
    console.log(edit)
    edit=JSON.stringify(edit)
    localStorage.setItem("classeCourant",edit)
    localStorage.setItem("editClasse","1")
    return this.route.navigate(["classes/form-classe"]);
  }
  deleteClasse(){
    return this.route.navigate(["classes/liste-classe"]);
  }
}
