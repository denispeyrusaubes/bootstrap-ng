import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { UserService } from '../userinfo/user.service';   
import { PaysService } from '../pays/pays.service'; 

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
export class InscriptionComponent implements OnInit {
  // Champs du formulaire
  nom = '';
  prenom = '';
  email = '';
  motDePasse = '';
  confirmMotDePasse = '';
  pays = '';
  dateNaissance: Date | null = null;

  // UI
  showAlert = false;

  // ✅ NEW: gestion des pays
  paysList: any[] = [];
  isLoadingPays = false;
  loadError: string | null = null;

  constructor(
    private userService: UserService,
    private router: Router,
    private paysService: PaysService // ✅ on injecte le service
  ) {}

  // ✅ NEW: on charge les pays au démarrage du composant
  ngOnInit(): void {
    this.isLoadingPays = true;
    this.paysService.getPays().subscribe({
      next: (data) => {
        // Tri alphabétique
        this.paysList = (data ?? []).sort((a: any, b: any) =>
          (a?.name?.common ?? '').localeCompare(b?.name?.common ?? '')
        );
        this.isLoadingPays = false;
        // console.log('Pays chargés:', this.paysList.length, this.paysList[0]);
      },
      error: (err) => {
        console.error('Erreur chargement pays', err);
        this.loadError = "Impossible de charger la liste des pays.";
        this.isLoadingPays = false;
      },
    });
  }

  onSubmit(): void {
    // Vérifs basiques
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
    if (this.motDePasse !== this.confirmMotDePasse) {
      this.showAlert = true;
      return;
    }

    this.showAlert = false;

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
