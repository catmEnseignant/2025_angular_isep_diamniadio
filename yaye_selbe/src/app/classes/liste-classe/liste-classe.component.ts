import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasseServiceService } from '../../services/classes/classe-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-list-classe',
  imports: [CommonModule],
  templateUrl: './liste-classe.component.html',
  styleUrls: ['./liste-classe.component.css'] // ← corrigé ici
})
export class ListeClasseComponent implements OnInit {
  classes: any;
  nombreClasse: number = 0;

  constructor(private route: Router, private classeService: ClasseServiceService) {
    console.log("yaye-selbe ");
  }

  ngOnInit() {
    this.classeService.getClasses().subscribe(
      (response) => {
        this.classes = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addClasse() {
    return this.route.navigate(["classes/form-classe"]);
  }
}
