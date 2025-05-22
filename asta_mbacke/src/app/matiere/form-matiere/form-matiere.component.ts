import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClasseServiceService } from '../../classe-service.service';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { Router } from 'express';

@Component({
  selector: 'app-form-matiere',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matiere.component.html',
  styleUrl: './form-matiere.component.css'
})
export class FormMatiereComponent implements OnInit{

  classform:FormGroup

  Classedit:any
  isedit: any

  constructor( private fb:FormBuilder, private matiereService: MatiereServiceService, private route:Router){
    this.classform= this.fb.group({
      nom:[''],
      description:[''],
      serie:[''],
      coefficient:[''],
    })
  }

  ngOnInit(): void {
    this.isedit=localStorage.getItem("editMatiere")
    console.log(this.isedit)
  }

  storeMatiere(){
    //console.log(this.classform.value)
    this.matiereService.storeMatiere(this.classform.value).subscribe(
      (response) => {
        alert('sucess')
      },
      (error) => {
        console.log('veuillez reessaiyer plus tard');
      }
    );
   }

}
