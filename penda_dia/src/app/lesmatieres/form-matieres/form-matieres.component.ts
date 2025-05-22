import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatieresServiceService } from '../../services/matieres/matieres-servise.service';

@Component({
  selector: 'app-form-matieres',
  imports: [ReactiveFormsModule],
  templateUrl: './form-matieres.component.html',
  styleUrls: ['./form-matieres.component.css']
})
export class FormMatieresComponent implements OnInit{
  matiereform: FormGroup;
  matieredit:any;
  isedit:any;
  constructor(private fb: FormBuilder, private matieresService: MatieresServiceService ) { 
    this.matiereform = this.fb.group({
      Code: [''],
      Nom: [''],
      Description: [''],
      Coefficient: [''],
    });
  }
   ngOnInit(): void {
      this.isedit=localStorage.getItem("edit")
      console.log(this.isedit)
    }
  storeMatieres() {
    this.matieresService.storeMatieres(this.matiereform.value).subscribe( 
      (response) => {
        alert("Succès");
      },
      (error) => {
        console.error("Erreur");
      }
    );
  }
}
