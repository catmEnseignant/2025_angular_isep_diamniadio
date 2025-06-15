import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';

//import { Router } from 'express';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-form-matiere',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matiere.component.html',
  styleUrl: './form-matiere.component.css'
})
export class FormMatiereComponent implements OnInit {
  
  matiereform:FormGroup
  matieredit:any
  isedit:any
  

  constructor(private fb:FormBuilder, private matiereService: MatiereServiceService, private route:Router){
    this.matiereform= this.fb.group({})
    
  }
  ngOnInit(): void{
    this.isedit = localStorage.getItem("editMatiere")
    if(this.isedit == 1){
      this.matieredit = localStorage.getItem('curentMatiere')
      this.matieredit=JSON.parse(this.matieredit)
      console.log(this.matieredit.nom)
      console.log(this.matieredit)
      this.matiereform= this.fb.group({
        nom:[this.matieredit.nom],
        niveau:[this.matieredit.niveau],
        serie:[this.matieredit.serie],
        nombre_eleve:[this.matieredit.nombres_eleve]
      })
    }
    else{
      this.matiereform= this.fb.group({
        nom:[''],
        niveau:[''],
        serie:[''],
        nombres_eleve:['']
      })
      
    }
    console.log(this.isedit)  

  }
 
  submitMatiere(){
    if(this.isedit == 1){
    this.matiereService.updateMatieres(this.matieredit.id,this.matiereform.value).subscribe(
      (response) => {
        return this.route.navigate(["/matieres/form-matiere"])
      },
      (error) =>{
        console.log(error)
      }
    )
    }else{
      this.matiereService.storeMatieres(this.matiereform.value).subscribe(
        (response) => {
          return this.route.navigate(["/matieres/form-matiere"])
        },
        (error) =>{
          console.log(error)
        }
      )
    
    }
  }  
}

