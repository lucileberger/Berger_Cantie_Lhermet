import * as fct from "/src/js/fonctions.js";


// chargement des librairies
import selection from "/src/js/selection.js";
import niveau1 from "/src/js/LesTrianglesCaches.js";
import niveau2 from "/src/js/niveau2.js";
import niveau3 from "/src/js/niveau3.js";
import menu from "/src/js/menu.js";


// configuration générale du jeu
var config = {
  type: Phaser.AUTO,
  width: 1000, // largeur en pixels
  height: 1000, // hauteur en pixels
   scale: {
        // Or set parent divId here
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
   },
  physics: {
    // définition des parametres physiques
    default: "arcade", // mode arcade : le plus simple : des rectangles pour gérer les collisions. Pas de pentes
    arcade: {
      // parametres du mode arcade
      gravity: {
        y: 0 // gravité verticale : acceleration ddes corps en pixels par seconde
      },
      debug: true // permet de voir les hitbox et les vecteurs d'acceleration quand mis à true
    }
  },
  scene: [menu,selection,niveau1, niveau2, niveau3]
};

// création et lancement du jeu
var game = new Phaser.Game(config);
game.scene.start("menu");