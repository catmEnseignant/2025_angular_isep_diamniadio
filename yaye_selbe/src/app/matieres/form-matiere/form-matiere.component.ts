import { Component } from '@angular/core';
import{FormBuilder,FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-matiere',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matiere.component.html',
  styleUrl: './form-matiere.component.css'
})
export class FormMatiereComponent {
  classForm:FormGroup 
      
  constructor(private fb:FormBuilder){
    this.classForm= this.fb.group({
      code:[''],
      nom:[''],
      description:[''],
      coefficient:[''],
    })

  }
  storeClasse(){
    console.log(this.classForm.value)
  }

}
