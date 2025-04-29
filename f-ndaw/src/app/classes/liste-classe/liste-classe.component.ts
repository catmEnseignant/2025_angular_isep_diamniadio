import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-classe',
  imports: [],
  templateUrl: './liste-classe.component.html',
  styleUrls: ['./liste-classe.component.css'] // ✅ ici c'est bien "styleUrls"
})
export class ListeClasseComponent {

  constructor(private route: Router) {
    console.log("constructeur");
  }

  addClass() {
    this.route.navigate(["classes/form-classe"]);
  }
}

