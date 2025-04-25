import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
@Component({
  selector: 'app-form-matiere',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matiere.component.html',
  styleUrl: './form-matiere.component.css'
})
export class FormMatiereComponent {

  classform:FormGroup

  constructor( private fb:FormBuilder){
    this.classform= this.fb.group({
      nom:[''],
      description:[''],
      coefficient:[''],
      nombre_de_jours:[''],
      
    })
  
  }
  storeClasse(){
    console.log(this.classform.value)
  }

}
