import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';   

type Section = { titre: string; description: string };

@Component({
  selector: 'app-sommaire',
  standalone: true,
  imports: [CommonModule],                  
  templateUrl: './sommaire.component.html',
  styleUrls: ['./sommaire.component.css']
})
export class SommaireComponent {
  constructor(private router: Router) {} 

  public sections: Section[] = [
    {
      titre: 'Accueil',
      description:
        "Je conçois et développe des applications web modernes, performantes et intuitives, en utilisant Angular. Ici, vous découvrirez mes projets, mon parcours, et comment je peux vous aider.",
    },
    {
      titre: 'À propos',
      description:
        "Passionné par le développement web, je me spécialise en Angular pour créer des interfaces robustes, maintenables et orientées UX.",
    },
    {
      titre: 'Projets',
      description:
        "Applications Angular, tableaux de bord interactifs, sites vitrines performants — conçus avec de bonnes pratiques et une architecture claire.",
    },
  ];

 
  
}
