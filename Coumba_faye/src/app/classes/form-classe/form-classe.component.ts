import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent implements OnInit{

  classform:FormGroup
  Classedit:any
  isedit:any


  constructor( private fb:FormBuilder, private classeService: ClasseServiceService, private route:Router){
  this.classform= this.fb.group({})

  }
  ngOnInit(): void {
    this.isedit=localStorage.getItem("editClasse")
    if(this.isedit == 1){
      this.Classedit=localStorage.getItem("currentClasse")
      //console.log(this.Classedit,this.Classedit.nom)
      this.Classedit=JSON.parse(this.Classedit)  

      this.classform= this.fb.group({
      nom:[this.Classedit.nom],
      niveau:[this.Classedit.niveau],
      serie:[this.Classedit.serie],
      nombre_eleve:[this.Classedit.nombre_eleve],
      
    })
    }
    else{
      this.classform= this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombre_eleve:[''],
      
    })

    }
    console.log(this.isedit)
  }
  
  submitClasse(){
    if(this.isedit == 1){
    this.classeService.updateClasse(this.Classedit.id, this.classform.value).subscribe(
     (response) => {
      return this.route.navigate(["classes/list-classe"])
      // alert('success')
     },
     (error) =>{
      console.log('Veillez reesseyer plutart ')

     }
    )    // console.log(this.classform.value)
  }else{
    this.classeService.storeClasse(this.classform.value).subscribe(
     (response) => {
      return this.route.navigate(["classes/list-classe"])
      // alert('success')
     },
     (error) =>{
      console.log('Veillez reesseyer plutart ')

     }
    );
  }  
}
  


}
