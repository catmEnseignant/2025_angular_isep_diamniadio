
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent implements OnInit {
  classform:FormGroup
   Classeedit:any
   isedit:any

  constructor(private fb:FormBuilder, private classeService: ClasseServiceService, private route:Router){
    this.classform = this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nbreClass:[''],
    })


  }
  ngOnInit(): void {
    this.isedit=localStorage.getItem("editClasse")
    console.log(this.isedit)

  }

  storeClasse(){
    this.classeService.storeClasse(this.classform.value).subscribe(
      (response) => {
        return this.route.navigate(["classes/list-classe"])
        //alert('success')
      },
      (error) =>{
        console.log('Veillez reeseyer plustart')
      }

    )
    //console.log(this.classform.value)
  }

}
