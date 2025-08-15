import { Routes } from '@angular/router';
import { SommaireComponent } from './pages/sommaire/sommaire.component';

export const routes: Routes = [
    { path: 'sommaire', component: SommaireComponent },
    { path: '', redirectTo: '/sommaire', pathMatch: 'full' }
];