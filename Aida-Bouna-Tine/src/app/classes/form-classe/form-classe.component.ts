import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import{FormBuilder,FormGroup, ReactiveFormsModule} from '@angular/forms'
import { CommonEngine } from '@angular/ssr/node';
@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent {
  classform:FormGroup

  constructor( private fb:FormBuilder){
    this.classform= this.fb.group({
      Nom:[''],
      niveau :[''],
      serie:[''],
      nombres_eleve:[''],
    })
  }
  storClass(){
    console.log(this.classform.value)
  }

}
