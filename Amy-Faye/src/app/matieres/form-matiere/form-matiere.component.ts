import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatiereServiceService } from '../../services/matieres/matiere-service.service';
import { response } from 'express';
import { error } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-matiere',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matiere.component.html',
  styleUrl: './form-matiere.component.css'
})
export class FormMatiereComponent {
  matiereform:FormGroup
  Matiereedit:any
   isedit:any

  constructor(private fb:FormBuilder ,  private matiereService: MatiereServiceService, private route:Router ){
    this.matiereform = this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nbreMatiere:[''],
    })
  }

  ngOnInit(): void {
    this.isedit=localStorage.getItem("editMatiere")
    console.log(this.isedit)

  }

  storeMatiere(){
    this.matiereService.storeMatiere(this.matiereform.value).subscribe(
      (response) => {
        return this.route.navigate(["matieres/list-matiere"])
        //alert('success')
      },
      (error) =>{
        console.log('Veillez reeseyer plustart')
      }

    )

    //console.log(this.matiereform.value)
  }

}
