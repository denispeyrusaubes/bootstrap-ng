import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { InscriptionComponent } from './pages/inscription/inscription.component'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'inscription', component: InscriptionComponent },
      { path: '', redirectTo: 'inscription', pathMatch: 'full' },
      { path: '**', redirectTo: 'inscription' },
    ]),
    provideHttpClient(),
    provideAnimations(),
  ],
};
