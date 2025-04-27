import { Component } from '@angular/core';
import{FormBuilder,FormGroup, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-form-matiere',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matiere.component.html',
  styleUrl: './form-matiere.component.css'
})
export class FormMatiereComponent {
  matierform:FormGroup

  constructor( private fb:FormBuilder){
    this.matierform= this.fb.group({
      Nom:[''],
      formateur :[''],
      nombres_matiere:[''],
      Types_matiere:[''],
    })
  }
  storClass(){
    console.log(this.matierform.value)
  }

}
