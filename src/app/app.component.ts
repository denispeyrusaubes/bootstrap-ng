import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],   // ✅ tableau + VIRGULE à la fin
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule
  ],
  template: `
    <mat-toolbar color="primary">
      <div class="nav"> 
        <button mat-button routerLink="/inscription"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }">Inscription</button>
        <button mat-button routerLink="/projets"      routerLinkActive="active">Projets</button>
        <button mat-button routerLink="/apropos"      routerLinkActive="active">À propos</button>
        <button mat-button routerLink="/calculator"   routerLinkActive="active">Calculatrice</button>
        <button mat-button routerLink="/userinfo"     routerLinkActive="active">Profil</button>
      </div>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
