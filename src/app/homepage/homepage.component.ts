import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <div class="homepageMain">
      <h1>👋 Bienvenue sur votre tableau de bord</h1>
      <p>Cet espace a été pensé pour vous offrir un moment agréable et productif.
          Voici ce que vous pouvez faire : <br>
            •	🔖 Gérer vos bookmarks pour un accès rapide à vos sites favoris <br>
            •	📝 Prendre des notes ou créer des to-do lists <br>
            •	🍲 Sauvegarder et consulter vos recettes préférées <br>
            •	🗺️ Explorer et utiliser la carte interactive <br>
            •	🎨 Changer le fond d’écran selon votre humeur <br>

          👉 Cliquez sur une icône ci-dessous pour commencer.
      </p>

    </div>
  `,
  styles: ``
})
export class HomepageComponent {

}
