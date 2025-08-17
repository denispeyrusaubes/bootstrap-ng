import { Routes } from '@angular/router';
import { ProjetsComponent } from './pages/projets/projets.component';
import { SommaireComponent } from './pages/sommaire/sommaire.component';
import { AproposComponent } from './pages/apropos/apropos.component'; // ✅

export const routes: Routes = [
  { path: '', component: SommaireComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'apropos', component: AproposComponent }  // ✅ nouvelle route
];
