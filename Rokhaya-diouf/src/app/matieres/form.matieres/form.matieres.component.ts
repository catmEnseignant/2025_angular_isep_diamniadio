import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';

@Component({
  selector: 'app-form.matieres',
  imports: [ReactiveFormsModule],
  templateUrl: './form.matieres.component.html',
  styleUrl: './form.matieres.component.css'
})

export class FormMatieresComponent implements OnInit{
  classform:FormGroup
  classed:any
  isedit:any

  constructor(private fb:FormBuilder ,private matiereService:MatiereServiceService){

    this.classform= this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombres_eleve:[''],
    })
  }

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  // storMatiere(){
  //   console.log(this.classform.value)
  // }
    storMatiere(){
    // console.log(this.classform.value)
    this.matiereService.storeMatiere(this.classform.value).subscribe(
      (response) => {
        alert('success')
      },
      (error) => {
        console.log('veillez reeseyer plutart')
      }
    )

  }
}
