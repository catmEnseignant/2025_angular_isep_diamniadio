import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-list-classe',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent implements OnInit {

 classes:any
 nombres_eleve :number = 0

  constructor(private route:Router,private classeService: ClasseServiceService){
    console.log("constructor")
  }

  ngOnInit(){
    this.classes= this.classeService.getClasses().subscribe(
    (response) => {
      this.classes = response
    },
    (error) =>
    console.log(error)

  )
    //this.nombres_eleve = this.classes.length//
    //console.log(this.nombres_eleve)//
  }
  
  

  addClasses(){
    console.log("add initialiser")
    return this.route.navigate(["classes/form-classe"])
  
}


}
