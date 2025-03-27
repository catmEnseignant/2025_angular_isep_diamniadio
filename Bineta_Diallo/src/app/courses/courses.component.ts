import { Component } from '@angular/core';
import { LessonComponent } from '../lesson/lesson.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  imports: [LessonComponent,FormsModule ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
title = "je suis une Diallobe"

compteur = 0;
lesson = "angular"

recepteur = 29;

prenom_nom = "Kadim Gueye";


prenom = "DIOR";

nom = "Ba";

adresse= "prokhane toucouleur";



image_value="image/service2.jpg";

imge_value="image/service4.jpg";


alt_value="departement";



getCompteur(){

  return this.compteur;
}

changerImage(){

  console.log("button click");
  alert("button click");

}
changerImagevalue(){
  console.log("button click");
  this.image_value=this.imge_value;
}

getrecepteur(){
  return "je suis developeur"
}

}