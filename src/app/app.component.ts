import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Section = { titre: string; description: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],              // ngFor vient d'ici
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {            

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