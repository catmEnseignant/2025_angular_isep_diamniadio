import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-matire',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matire.component.html',
  styleUrl: './form-matire.component.css'
})
export class FormMatireComponent {

  matiereform:FormGroup

  constructor( private fb:FormBuilder){
    this.matiereform= this.fb.group({
      code:[''],
      nom:[''],
      description:[''],
      coefficient:[''],
    })

    
  }
  storeMatiere(){
    console.log(this.matiereform.value)
  }

}
