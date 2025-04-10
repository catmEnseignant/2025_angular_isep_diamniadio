import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nouveautés';

  public hotels: any[] = [
    {
      id:1,
      nom: "Diao",
      prenom: "Oumar",
      age:22,
      email:"odiao@gmail.com"
    },
    {
      id:2,
      nom: "Diao",
      prenom: "Black",
      age:25,
      email:"black12@gmail.com"
    }
  ]
}
