import { Component } from '@angular/core';
import { LesssonComponent } from '../lessson/lessson.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-courses',
  imports: [LesssonComponent,FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  title = "Ingenieur en informatique"

  expression = "la reussite est au bout de l'effort"

  calcul = "voici la somme d'argent qu'ils ont detourner depuis 2012👺"

  compteur = 0;

  lesson = "voici notre lesson d'angular"
  
  recepteur = 29;


  prenom_nom = "Khadija Ba";


  filiere= "DFE";

  prenom="Monsieur";

  nom="mbengue";

  adresse="dakar";

 
  
  image_value= "image/k.b.jpg";

  photo_value= "image/B.k.s.jpg";

  alt_value="departement";


  getCompteur(){

    return this.compteur;
  }


  changeImage(){

    console.log("button click");
    alert("button click");

  }

  changeImageValue(){
    console.log("button click");
    this.image_value=this.photo_value,

    console.log("button.click");
    this.image_value=this.photo_value;

  }
 

  getrecepteur(){
    return "princesse peul"
 }



}
