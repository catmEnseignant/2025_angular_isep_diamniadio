import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder,FormGroup, ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-form-class',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-class.component.html',
  styleUrl: './form-class.component.css'
})
export class FormClassComponent {
  constructor(private fb:FormBuilder){
    this.classForm = this.fb.group({
      nom:[''],
      nbreClass:[''],
      serie:[''],
      niveau:[''],
    })
  }

  classForm:FormGroup
  storeClass(){
   console.log( this.classForm.value)
  }
}
