import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson',
  standalone: true, // ✅ Important pour standalone
  imports: [CommonModule], // ✅ pour pouvoir utiliser *ngFor dans le HTML
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'] // ✅ avec un "s"
})
export class LessonComponent {
  lecons = [
    { code: 101, titre: 'Les fractions', matiere: 'Mathématiques', duree: '45 min' },
    { code: 102, titre: 'Les états de la matière', matiere: 'Physique', duree: '50 min' },
    { code: 103, titre: 'La Révolution française', matiere: 'Histoire', duree: '60 min' }
  ];
}
