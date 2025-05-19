import { Response } from './../../../../node_modules/@tinyhttp/app/dist/response.d';
import { ClasseServiceService } from './../../services/classes/classe-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-list-classe',
  imports: [CommonModule],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent implements OnInit{
  // any: dit tu peux retuner dee n'importe quel valeur
  classes : any

  nbreClass:number = 0
  constructor (private route:Router,private classeService: ClasseServiceService) {
    console.log("constructeur")
  }

  ngOnInit(){
    this.classeService.getClasses().subscribe(
      (response) => {

        this.classes = response
        console.log(response)
      },

      (error) => {
        console.log(error)
      }
        
    )


    // this.nbreClass = this.classes.length
    // console.log(this.nbreClass)

  }

  addClass () {
    console.log("add initialiser")
    return this.route.navigate(["classes/form-classes"]);
  }

 
}


