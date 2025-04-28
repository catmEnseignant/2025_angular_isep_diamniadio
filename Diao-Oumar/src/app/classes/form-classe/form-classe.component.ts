import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent {

  classeform:FormGroup

  constructor(private fb:FormBuilder){
    this.classeform = this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombre:[''],
    })
  }

  public storeClasse () {
    console.log(this.classeform.value);
  }

}
