import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent implements OnInit {

  classform: FormGroup;
  isedit: any;
  classedit: any;

  constructor(private fb: FormBuilder, private classeService: ClasseServiceService, private route: Router) {
    this.classform = this.fb.group({});
  }

  ngOnInit(): void {
    this.isedit = localStorage.getItem("editClasse");
    
    if (this.isedit === '1') {
      this.classedit = JSON.parse(localStorage.getItem("currentClasse") || '{}');
      this.classform = this.fb.group({
        id: [this.classedit.id], // important pour update
        nom: [this.classedit.nom],
        niveau: [this.classedit.niveau],
        serie: [this.classedit.serie],
        nombres_eleve: [this.classedit.nombres_eleve],
      });
    } else {
      this.classform = this.fb.group({
        nom: [''],
        niveau: [''],
        serie: [''],
        nombres_eleve: [''],
      });
    }
  }

  submitClasse() {
  console.log (this.classform.value,this.classedit.id)
  if (this.isedit == 1) {
    
   
    this.classeService.updateClasses(this.classform.value).subscribe(
      (response) => {
        return this.route.navigate(["/classe/list-classes"])
      
      },
      (error) =>{
        console.log(error)
      }
    )
      
  } else {
    // Ajout
    this.classeService.storeClasse(this.classform.value).subscribe(
      (response) => this.route.navigate(["/classe/list-classes"]),
      (error: any) => console.log(error)
    );
  }
}

}
