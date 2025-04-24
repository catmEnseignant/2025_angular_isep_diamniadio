import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-list-classe',
  imports: [],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent {
constructor(private router:Router ) {
  console.log('constructeur')
}

addClasse(){
  
  console.log("addClasse")
}
}
