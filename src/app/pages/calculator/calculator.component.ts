import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

resultat=0
valeur1=0
valeur2=0

add() {
  console.log(this.valeur1)
  console.log(this.valeur2)
this.resultat = this.valeur1 + this.valeur2
}
}

