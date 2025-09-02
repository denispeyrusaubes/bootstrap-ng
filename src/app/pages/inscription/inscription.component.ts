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
  pays = '';
  dateNaissance: Date | null = null;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
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

