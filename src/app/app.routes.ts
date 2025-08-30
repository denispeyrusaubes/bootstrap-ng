import { Routes } from '@angular/router';
import { ProjetsComponent } from './pages/projets/projets.component';
import { SommaireComponent } from './pages/sommaire/sommaire.component';
import { AproposComponent } from './pages/apropos/apropos.component'; 
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';

export const routes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'sommaire', component: SommaireComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'userinfo', component: UserinfoComponent }

];
