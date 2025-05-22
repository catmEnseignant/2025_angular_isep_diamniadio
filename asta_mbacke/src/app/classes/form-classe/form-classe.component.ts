import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ClasseServiceService } from '../../services/classes/classe-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent implements OnInit{
  classForm:FormGroup 

  Classedit:any
  isedit: any

  constructor(private fb:FormBuilder,private classeService: ClasseServiceService, private route:Router){
    this.classForm= this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombre_eleve:[''],
    })


  }

  ngOnInit(): void {
    this.isedit=localStorage.getItem("editClasse")
    console.log(this.isedit)
  }
  storeClasse(){
    this.classeService.storeClasse(this.classForm.value).subscribe(
      (response) => {
       // alert('sucess')
       return this.route.navigate(["/classes/liste-classe"])
      },
      (error) => {
        console.log('veuillez reessaiyer plus tard');
      }
    );
   }
}