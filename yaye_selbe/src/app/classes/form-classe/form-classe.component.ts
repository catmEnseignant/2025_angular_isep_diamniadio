
import { Component } from '@angular/core';
import{FormBuilder,FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent {
  classForm:FormGroup 
      
  constructor(private fb:FormBuilder){
    this.classForm= this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombre_eleve:[''],
    })

  }
  storeClasse(){
    console.log(this.classForm.value)
  }
}
