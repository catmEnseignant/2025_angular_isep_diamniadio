import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-classe',
  imports: [CommonModule],
  templateUrl: './list-classe.component.html',
  styleUrl: './list-classe.component.css'
})
export class ListClasseComponent implements OnInit {

 classes:any
 nombre:number = 0
constructor(private roote:Router, private classeService: ClasseServiceService){
  console.log("constructeur")
}
ngOnInit(){
this.classes= this.classeService.getClasse()
this.nombre = this.classes.length
console.log(this.nombre)
}

addclasse(){
  return this.roote.navigate(["classes/form-classe"])

}

}
