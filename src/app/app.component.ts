import { Component } from '@angular/core';
import { CourseComponent } from './course/course.component';


@Component({
  selector: 'app-root',
  imports: [CourseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project-angular';
}
