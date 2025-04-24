import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-classe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.css']
})
export class ListClasseComponent {
  classes = [
    { code: 1, nom: '6ème A', effectif: 30 },
    { code: 2, nom: '5ème B', effectif: 28 },
    { code: 3, nom: '4ème C', effectif: 32 }
  ];
}
