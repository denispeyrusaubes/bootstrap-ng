import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { UserService } from '../userinfo/user.service';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  templateUrl: './inscription.component.html',
})
export class InscriptionComponent {
  nom = '';
  prenom = '';
  email = '';
  motDePasse = '';
  confirmMotDePasse = '';
  pays = '';
  dateNaissance: Date | null = null;

  showAlert = false; // ✅ pour afficher un message d’erreur global

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    // Vérifie si un champ est vide
    if (
      !this.nom ||
      !this.prenom ||
      !this.email ||
      !this.motDePasse ||
      !this.confirmMotDePasse ||
      !this.pays ||
      !this.dateNaissance
    ) {
      this.showAlert = true;
      return;
    }

    // Vérifie que les mots de passe correspondent
    if (this.motDePasse !== this.confirmMotDePasse) {
      this.showAlert = true;
      return;
    }

    this.showAlert = false; // ✅ tout est bon → on enlève l’alerte

    const user = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      motDePasse: this.motDePasse,
      pays: this.pays,
      dateNaissance: this.dateNaissance,
    };

    this.userService.setUser(user);
    this.router.navigate(['/userinfo']);
  }
}
