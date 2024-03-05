

// chargement des librairies



import selection from "/src/js/selection.js";
import histoire from "/src/js/histoire.js";
import niveau1 from "/src/js/niveau1.js";
import niveau2 from "/src/js/niveau2.js";
import niveau3 from "/src/js/niveau3.js";
import niveau4 from "/src/js/niveau4.js";
import niveau5 from "/src/js/niveau5.js";
import niveau6 from "/src/js/niveau6.js";
import niveau7 from "/src/js/niveau7.js";
import niveau8 from "/src/js/niveau8.js";
import niveau9 from "/src/js/niveau9.js";
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
  scene: [menu,histoire,selection,niveau1, niveau2, niveau3,niveau4,niveau5,niveau6,niveau7,niveau8,niveau9]
};

// création et lancement du jeu
var game = new Phaser.Game(config);
game.scene.start("menu");