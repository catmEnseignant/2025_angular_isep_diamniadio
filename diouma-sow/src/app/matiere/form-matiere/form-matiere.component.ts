import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-matiere',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matiere.component.html',
  styleUrl: './form-matiere.component.css'
})
export class FormMatiereComponent {

  matiereform:FormGroup


  constructor( private fb:FormBuilder){
    this.matiereform = this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombres_eleve:[''],

      
    })
  }
  storeMatieres(){
    console.log(this.matiereform.value)
  }

}
