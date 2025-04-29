import { Component } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-list-classe',
  imports: [],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.scss'
})
export class ListClasseComponent {
a=3   
  constructor( private route:Router){
    console.log("constructeur")
  }
  addClasses(){
    return this.route.navigate(["./classes/form-classes"])

  }
   

}