import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-classe',
  imports: [CommonModule],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent implements OnInit{
  classes:any
  nombreClasse:number = 0
  constructor(private route:Router, private classeService: ClasseServiceService){
    console.log("Coumba Faye ")
  }
  
  ngOnInit() {
    this.classes = this.classeService.getClasse()
    // this.nombreClasse(this.classes.length)
    // console.log(this.nombreClasse)
  
  }
  addClasse(){
    return this.route.navigate(["classes/form-classe"])
    
  }
 
}
