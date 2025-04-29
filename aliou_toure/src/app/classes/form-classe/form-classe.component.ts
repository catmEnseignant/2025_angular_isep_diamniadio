import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-classe',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-classe.component.html',
  styleUrls: ['./form-classe.component.css']
})
export class FormClasseComponent {
  classe = {
    code: 0,
    nom: '',
    effectif: 0
  };

  // constructor(private router: Router) {}

  // onSubmit() {
  //   console.log('Classe ajoutée :', this.classe);
  //   // Ici tu pourrais envoyer la classe à un service/backend
  //   this.router.navigate(['/classes']); // Retour à la liste
  // }

  // cancel() {
  //   this.router.navigate(['/classes']);
  // }

  classfrom:FormGroup
  constructor(private fb:FormBuilder){
    this.classfrom = this.fb.group({
      nom:[''],
      niveau:[''],
      serie:[''],
      nombre_eleve:['']
    })
  }

  storeClasse(){
    console.log(this.classfrom.value)
  }

}
