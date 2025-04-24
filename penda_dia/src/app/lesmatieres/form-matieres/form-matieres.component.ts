import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-matieres',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matieres.component.html',
  styleUrl: './form-matieres.component.css'
})
export class FormMatieresComponent {

  matiereform:FormGroup;
  constructor(private fb:FormBuilder){
    this.matiereform = this.fb.group({
      Code:[''],
      Nom:[''],
      Description:[''],
      Coefficient:['']
    })
    
  }
  storeMatiere(){
    console.log(this.matiereform.value);
  }

}
