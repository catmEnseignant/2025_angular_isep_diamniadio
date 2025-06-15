import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { Router } from '@angular/router'; 
//import { Router } from 'express';

@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent implements OnInit{

  classform:FormGroup

  classedit:any
  isedit:any
  

  constructor(private fb:FormBuilder, private classeService: ClasseServiceService, private route:Router){
    
    this.classform= this.fb.group({})
  }
  ngOnInit(): void{
    this.isedit = localStorage.getItem("editClasse")
    if(this.isedit == 1){
      this.classedit = localStorage.getItem('curentClasse')
      this.classedit=JSON.parse(this.classedit)
      console.log(this.classedit.nom)
      console.log(this.classedit)
      this.classform= this.fb.group({
        nom:[this.classedit.nom],
        niveau:[this.classedit.niveau],
        serie:[this.classedit.serie],
        nombres_eleve:[this.classedit.nombres_eleve]
      })
    }
    else{
      this.classform= this.fb.group({
        nom:[''],
        niveau:[''],
        serie:[''],
        nombres_eleve:['']
      })
      
    }
    console.log(this.isedit)
  }
  submitClasse(){
    if(this.isedit == 1){
      this.classeService.updateClasses(this.classedit.id,this.classform.value).subscribe(
        (response) => {
          return this.route.navigate(["/classes/liste-classe"]);
        },
        (error) =>{
          console.log(error)
        }
      )
    }else{  
        this.classeService.storeClasses(this.classform.value).subscribe(
          (response) => {
            return this.route.navigate(["/classes/liste-classe"]);
          },
          (error) =>{
            console.log(error)
          }
        )
    }  
    //console.log(this.classform.value)
  }
}