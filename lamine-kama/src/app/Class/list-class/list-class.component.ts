import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-class',
  imports: [],
  templateUrl: './list-class.component.html',
  styleUrl: './list-class.component.css'
})
export class ListClassComponent {

  constructor(private route:Router){
    console.log("lamine kama")
  }
  addClass(){
   return this.route.navigate(["/class/form-class"])
    
  }

}
