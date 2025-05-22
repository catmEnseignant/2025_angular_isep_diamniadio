
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClasseServiseService } from '../../services/classes/classes-servise.service';

@Component({
  selector: 'app-form-classe',
  imports: [ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent implements OnInit {
  classform:FormGroup;
  classedit:any;
  isedit:any;
    constructor(private fb:FormBuilder, private classeService: ClasseServiseService) {
      this.classform = this.fb.group({
        Nom:[''],
        Niveau:[''],
        Serie:[''],
        nombre_eleve:[''],
      })
      
    }
    ngOnInit(): void {
      this.isedit=localStorage.getItem("edit")
      console.log(this.isedit)
    }
    storeClasse(){
        this.classeService.storeClasse(this.classform.value).subscribe(
          (response) =>{
            alert("succés");
          },
          (error) => {
            console.log("erreur");
          }
        // console.log(this.classform.value);
        );
        
    }
}
