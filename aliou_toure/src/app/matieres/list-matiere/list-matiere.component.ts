import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-matiere',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-matiere.component.html',
  styleUrl: './list-matiere.component.css'
})
export class ListMatiereComponent {
  classes = [
    { code: 1, nom: '6ème A', effectif: 30 },
    { code: 2, nom: '5ème B', effectif: 28 },
    { code: 3, nom: '4ème C', effectif: 32 }
  ];
}
