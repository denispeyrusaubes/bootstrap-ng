# Nouvelle Page

Avec Angular, un page, c'est pas juste un fichier, ce sont plusieurs fichiers.

Il n'est pas nécessaire de les créer un par un, Angular propose un outil pour cela.

D'ailleur pour Angular, une page, ca s'appelle un component, et pour créer un component :

``` 
# Attention, il faut-être à la racine du projet pour exécuter la commande suivante.
ng generate component pages/nouvelle-page
```

résultat : 

````
CREATE src/app/pages/nouvelle-page/nouvelle-page.component.css (0 bytes)
CREATE src/app/pages/nouvelle-page/nouvelle-page.component.html (28 bytes)
CREATE src/app/pages/nouvelle-page/nouvelle-page.component.spec.ts (635 bytes)
CREATE src/app/pages/nouvelle-page/nouvelle-page.component.ts (241 bytes)
```

4 fichiers sont créés. Il sont dans le répertoire indiqué.

Il faut donc retenir que une page qui est affichée à l'écran se compose de 4 fichiers qui sont regroupés dans un répertoire dédié.
Il y aura donc un répertoire par page. Et chacun de ces répertoire contient 4 fichiers :

- html : tu maitrises
- css : tu maitrises
- ts : c'est du typescript, un langage de programmation qu'il faut apprendre, c'est pas très compliqué
- spec.ts : c'est pour faire des tests, on peut l'ignorer pour le moment


Pour que cela fonctionne, il faut associer une route à ce composant (page). On fait cela dans app.routes.ts :

```
export const routes: Routes = [
    { path: 'nouvelle-page', component: NouvellePageComponent },
    { path: '', redirectTo: '/nouvelle-page', pathMatch: 'full' }
];
```

Si tu accèdes à http://localhost:4200/nouvelle-page, ta nouvelle page va apparaitre