import { Routes } from '@angular/router';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';
import { SommaireComponent } from './pages/sommaire/sommaire.component';
import { RugbyComponent } from './pages/rugby/rugby.component';


export const routes: Routes = [
  { path: '', redirectTo: 'inscription', pathMatch: 'full' },   
  { path: 'inscription', component: InscriptionComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'userinfo', component: UserinfoComponent },
  { path: 'sommaire', component: SommaireComponent },
  { path: 'rugby', component: RugbyComponent },  
  
  { path: '**', redirectTo: 'inscription' }                     
];
