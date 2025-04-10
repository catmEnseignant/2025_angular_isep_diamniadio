import { Component } from '@angular/core';
import { LessonComponent } from '../lesson/lesson.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-coures',
  imports: [LessonComponent, FormsModule],
  templateUrl: './coures.component.html',
  styleUrl: './coures.component.css'
})
export class CouresComponent {
  title= "je suis un titre course";

  compteur= "98";

  prenom_nom= "aliou toure";

  image_value= "image/R.jpg";
  image_deux="aerr.jpg";

  alt_image="Deppartement";

  getCompteur(){
    return this.compteur;
  }
  getTitle(){
    return this.title;
  }

  Nom="Aliou";

  mail="taliou124@gmail.com";

  adresse="Medina Sabakh";

  changeImage(){
    console.log("le bouton est changer");
    alert("bouton cliquer");
    
  }
  
  changeImageValue(){
    console.log("button click");
    this.image_value=this.image_deux;
  }
}
