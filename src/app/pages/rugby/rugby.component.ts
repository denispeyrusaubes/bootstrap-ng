import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // 👈 pour *ngIf, *ngFor
import { FormsModule } from '@angular/forms';     // 👈 pour [(ngModel)]
import { RugbyService } from './rugby.service';

@Component({
  selector: 'app-rugby',
  standalone: true,                     // 👈 composant standalone
  imports: [CommonModule, FormsModule], // 👈 directives/pipes utilisées dans le template
  templateUrl: './rugby.component.html',
  styleUrls: ['./rugby.component.css']
})
export class RugbyComponent implements OnInit {
  companyData: any;
  isLoading = false;
  errorMessage = '';
  domainInput: string = '';

  constructor(private rugbyService: RugbyService) {}

  ngOnInit(): void {
    this.searchCompany('apple.com');
  }

  searchCompany(domain: string): void {
    if (!domain) return;
    this.isLoading = true;
    this.errorMessage = '';

    this.rugbyService.getCompanyByDomain(domain).subscribe({
      next: (data) => {
        console.log('✅ API Response:', data);
        this.companyData = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('❌ API Error:', err);
        this.errorMessage = 'Erreur lors de la récupération des données.';
        this.isLoading = false;
      }
    });
  }
}
