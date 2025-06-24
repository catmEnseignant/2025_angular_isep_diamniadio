import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatiereServiceService } from '../../services/matiere/matiere-service.service';

@Component({
  selector: 'app-form-matiere',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matiere.component.html',
  styleUrl: './form-matiere.component.css'
})
export class FormMatiereComponent {

  matiereform:FormGroup


  constructor( private fb:FormBuilder ,private matiereService: MatiereServiceService){
    this.matiereform = this.fb.group({
      nom:[''],
      description:[''],
      coefficient:[''],
      nombre_de_jours:[''],

      
    })
  }
  storeMatieres(){
    this.matiereService.storeMatieres(this.matiereform.value).subscribe(
      (Response)  => {
        alert('success')
      },
      (error) =>{
        console.log('veillez reeseyer plutar ')
      }

    )
    //return this.httpClient.get(this.host+"/matieres")
  }

}
