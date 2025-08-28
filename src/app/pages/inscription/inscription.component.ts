import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';   // ✅ import nécessaire
import { UserService } from '../userinfo/user.service';

@Component({
  selector: 'app-inscription',
  standalone: true,             // ✅ indique que le composant est standalone
  imports: [FormsModule],       // ✅ FormsModule activé uniquement pour ce composant
  templateUrl: './inscription.component.html'
})
export class InscriptionComponent {
  nom = '';
  prenom = '';
  email = '';
  motDePasse = '';
  pays = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    const user = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      motDePasse: this.motDePasse,
      pays: this.pays
    };
    this.userService.setUser(user);
    this.router.navigate(['/userinfo']);
  }
}
