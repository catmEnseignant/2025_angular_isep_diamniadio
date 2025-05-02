import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseServiseService } from '../../services/classes/classes-service.service';

@Component({
  selector: 'app-list-classe',
  imports: [CommonModule],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent  implements OnInit{
  classes: any[] = [];
  
  
  constructor( private route: Router, private classeService: ClasseServiseService) {
    console.log('constructeur');
  }

  
  ngOnInit(){
    this.classes = this.classeService.getClass()
    // console.log(this.classes.length)
  }
  
  
  addClasse(){
    return this.route.navigate(["classes/form-classe"]);
   
  }

  
}
