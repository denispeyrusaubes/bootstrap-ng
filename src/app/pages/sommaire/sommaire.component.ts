import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Section = { titre: string; description: string };

@Component({
  selector: 'app-sommaire',
  imports: [CommonModule],
  templateUrl: './sommaire.component.html',
  styleUrl: './sommaire.component.css'
})
export class SommaireComponent {

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
