import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

type Section = { titre: string; description: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],              // ngFor vient d'ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {            

}