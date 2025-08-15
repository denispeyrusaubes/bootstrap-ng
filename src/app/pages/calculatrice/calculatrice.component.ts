import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculatrice',
  imports: [FormsModule],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {
  valeur1: number = 0;
  valeur2: number = 0;

  get somme(): number {
    return (this.valeur1 || 0) + (this.valeur2 || 0);
  }
}
