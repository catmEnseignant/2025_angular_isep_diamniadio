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

  ngOnInit() {
  this.classeService.getClasses().subscribe(
    (response) => {
      this.classes = response;
      this.nombres_eleve = this.classes.reduce((total: number, cls: any) => {
        return total + (parseInt(cls.nombre_eleves) || 0); // attention à bien caster
      }, 0);
      console.log("Nombre total d'élèves :", this.nombres_eleve);
    },
    (error) => console.log(error)
  );
}

 editClasse(editClasse: any) {
  console.log("Classe à éditer :", editClasse);
  localStorage.setItem("editClasse", "1"); 
  localStorage.setItem("currentClasse", JSON.stringify(editClasse));
  return this.route.navigate(["classes/form-classe"]);
}

  
  

 addClasses(){
  console.log("add initialiser");
  localStorage.setItem("editClasse", "0"); 
  localStorage.removeItem("currentClasse"); 
  return this.route.navigate(["classes/form-classe"]);
}

deleteClasse(classe:any){
  let sup = confirm("Voulez vous supprimer")
  if(sup){
    this.classeService.deleteClasse(classe.id).subscribe(
      (response) => {
        alert("classe bien supprimer")
      },
      (error) => {
        console.log(error)
      },
    )
  }
  console.log(classe)

}



}
