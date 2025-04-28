
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent {

  classform:FormGroup

  constructor(private fb:FormBuilder){
    this.classform = this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombres_eleves:['']
    })
  }

  storeClasse(){
    console.log(this.classform.value)
  }

}
