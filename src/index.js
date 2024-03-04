import * as fct from "/src/js/fonctions.js";

/***********************************************************************/
/** VARIABLES GLOBALES 
/***********************************************************************/

var player; // désigne le sprite du joueur
var clavier; // pour la gestion du clavier


// définition de la classe "selection"
export default class selection extends Phaser.Scene {
  constructor() {
    super({ key: "selection" }); // mettre le meme nom que le nom de la classe
  }

  preload() {
    // tous les assets du jeu sont placés dans le sous-répertoire src/assets/

    this.load.spritesheet("img_perso", "src/assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48
    });

    // chargement tuiles de jeu
this.load.image("Phaser_Map3", "src/assets/Map3.png");

// chargement de la carte
this.load.tilemapTiledJSON("carte", "src/assets/map2.json");  
   
  }

  
  create() {
     // chargement de la carte
const carteDuNiveau = this.add.tilemap("carte");

// chargement du jeu de tuiles
const tileset = carteDuNiveau.addTilesetImage(
          "Map3",
          "Phaser_Map3"
        );

const Calquestuiles = carteDuNiveau.createLayer(
  "calque_tuiles",
  tileset
);  

calque_tuiles.setCollisionByProperty({ estSolide: true });
this.physics.add.collider(player,tuiles);
this.cameras.main.startFollow(player);    

    // On créée un nouveeau personnage : player
    player = this.physics.add.sprite(100, 450, "img_perso");

    //  propriétées physiqyes de l'objet player :
    player.setCollideWorldBounds(true); // le player se cognera contre les bords du monde

        this.anims.create({
      key: "anim_tourne_gauche", // key est le nom de l'animation : doit etre unique poru la scene.
      frames: this.anims.generateFrameNumbers("img_perso", {
        start: 0,
        end: 3
      }), // on prend toutes les frames de img perso numerotées de 0 à 3
      frameRate: 10, // vitesse de défilement des frames
      repeat: -1 // nombre de répétitions de l'animation. -1 = infini
    });

    // creation de l'animation "anim_tourne_face" qui sera jouée sur le player lorsque ce dernier n'avance pas.
    this.anims.create({
      key: "anim_face",
      frames: [{ key: "img_perso", frame: 4 }],
      frameRate: 20
    });

    // creation de l'animation "anim_tourne_droite" qui sera jouée sur le player lorsque ce dernier tourne à droite
    this.anims.create({
      key: "anim_tourne_droite",
      frames: this.anims.generateFrameNumbers("img_perso", {
        start: 5,
        end: 8
      }),
      frameRate: 10,
      repeat: -1
    });

   
    clavier = this.input.keyboard.createCursorKeys();

  
  update() {
    
    if (clavier.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play("anim_tourne_gauche", true);
    } else if (clavier.right.isDown) {
      player.setVelocityX(160);
      player.anims.play("anim_tourne_droite", true);
    } else {
      player.setVelocityX(0);
      player.anims.play("anim_face");
    }

    }
  }
}


