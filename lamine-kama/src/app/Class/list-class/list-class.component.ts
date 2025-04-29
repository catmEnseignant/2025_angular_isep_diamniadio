import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-class',
  imports: [CommonModule],
  templateUrl: './list-class.component.html',
  styleUrl: './list-class.component.css'
})
export class ListClassComponent implements OnInit{
   classes:any
   nbreClass:number = 0 
   constructor(private route:Router,private classeService: ClasseServiceService){
     console.log("lamine kama")
    }
    ngOnInit(){
      this.classes = this.classeService.getClasse()
      this.nbreClass = this.classes.length
      console.log(this.nbreClass)
    }

    addClass(){
      console.log("add initialiser")
      return this.route.navigate(["/class/form-class"])
  } 


}
