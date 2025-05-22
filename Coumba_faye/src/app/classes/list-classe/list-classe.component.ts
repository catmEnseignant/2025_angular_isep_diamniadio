import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
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
  classes:any
  nombreClasse:number = 0
  constructor(private route:Router, private classeService: ClasseServiceService){
    console.log("Coumba Faye ")
  }
  
  ngOnInit() {
   this.classeService.getClasses().subscribe(
    (response) =>  {
      this.classes = response
    },
    (error) =>  {
      console.log(error)
    }
  )
    // this.nombreClasse(this.classes.length)
    // console.log(this.nombreClasse)
  
  }
  editClasse(editClasse:any){
    console.log(editClasse)
    editClasse = JSON.stringify(editClasse)
    localStorage.setItem("currentClasse", editClasse)
    localStorage.setItem("editClasse", "1")
   return this.route.navigate(["classes/form-classe"])
  }
  addClasse(){
    localStorage.setItem("editClasse", "0")
    return this.route.navigate(["classes/form-classe"])
    
  }
 
}
