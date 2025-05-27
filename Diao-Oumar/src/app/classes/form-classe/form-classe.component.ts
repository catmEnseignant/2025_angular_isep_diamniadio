import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { ClassesServicesService } from '../../services/classes/classes-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent implements OnInit{

  classeform:FormGroup
  classeEdit : any ;
  isEdit : any ;

  constructor(private fb:FormBuilder, private classeServices:ClassesServicesService, private route:Router){
    this.classeform = this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombre:[''],
    })
  }

  ngOnInit(): void {
    this.isEdit = localStorage.getItem("editClasse");
    console.log(this.isEdit);
    // this.classeServices.editClasse()
  }

  public storeClasse () {
    this.classeServices.storeClasses(this.classeform.value).subscribe({
      next : (res) => {
        // this.classe = res
        console.log(res);
        return this.route.navigate(["classes/list-classe"]);
      },
      error : (error) : void => {
        console.log(error);
      }
    });
    // console.log(this.classeform.value);
  }

}
