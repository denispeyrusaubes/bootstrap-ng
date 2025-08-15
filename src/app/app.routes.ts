import { Routes } from '@angular/router';
import { NouvellePageComponent } from './pages/nouvelle-page/nouvelle-page.component';


export const routes: Routes = [
    { path: 'nouvelle-page', component: NouvellePageComponent },
    { path: '', redirectTo: '/nouvelle-page', pathMatch: 'full' }
];