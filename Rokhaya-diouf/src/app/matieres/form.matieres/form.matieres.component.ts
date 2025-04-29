import { Component } from '@angular/core';
import { FormBuilder ,FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form.matieres',
  imports: [ReactiveFormsModule],
  templateUrl: './form.matieres.component.html',
  styleUrl: './form.matieres.component.css'
})
export class FormMatieresComponent {
  classform:FormGroup

  constructor(private fb:FormBuilder){

    this.classform= this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombres_eleve:[''],
    })
  }
  storClass(){
    console.log(this.classform.value)
  }
}
