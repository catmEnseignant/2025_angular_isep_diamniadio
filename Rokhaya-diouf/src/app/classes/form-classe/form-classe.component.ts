import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})

export class FormClasseComponent implements OnInit{
  classform:FormGroup
  classed:any
  isedit:any


  constructor(private fb:FormBuilder ,private classeService:ClasseServiceService, private route:Router){
    this.classform= this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombres_eleve:[''],
    })
  }

  ngOnInit():void{
    this.isedit=localStorage.getItem("editClasse")
    console.log(this.isedit)

  }
  storClass(){
    // console.log(this.classform.value)
    this.classeService.storeClasse(this.classform.value).subscribe(
      (response) => {
        return this.route.navigate(["classes/list-classe"])
        // alert('success')
      },
      (error) => {
        console.log('veillez reeseyer plutart')
      }
    )
  }
}
