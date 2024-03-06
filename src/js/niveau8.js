import * as fct from "/src/js/fonctions.js";

export default class niveau8 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau8" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("LaFin","src/assets/ImageFin.jpg")
    this.load.audio("sonfin", "./src/assets/Musiquefin.mp3");
    
   
  }

  create() {
    
    this.game.config.sonsword.stop();
    
    fct.doNothing();
    fct.doAlsoNothing();
    this.add.image(500, 500, "LaFin");
    let sonsword = this.sound.add("sonfin");
    sonsword.play();

   

    // ajout d'un texte distintcif  du niveau
    this.add.text(350, 80, "FELICITATIONS", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });
    this.add.text(60, 120, "\nVous avez réussi toute les enigmes vous etes maintenant libre.", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
  


    this.player = this.physics.add.sprite(100, 450, "img_perso");
    this.player.refreshBody();
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.clavier = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player, this.groupe_plateformes);



  }

  update() {
    if (this.clavier.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("anim_tourne_gauche", true);
    } else if (this.clavier.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("anim_tourne_droite", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("anim_face");
    }

    // Mouvement vertical
    if (this.clavier.up.isDown) {
      this.player.setVelocityY(-330);
    } else if (this.clavier.down.isDown) {
      this.player.setVelocityY(330);
    } else {
      this.player.setVelocityY(0);
    }

    // Mouvement vertical
    if (this.clavier.up.isDown) {
      this.player.setVelocityY(-330);
    } else if (this.clavier.down.isDown) {
      this.player.setVelocityY(330);
    } else {
      this.player.setVelocityY(0);
      if (this.clavier.up.isDown && this.player.body.touching.down) {
        this.player.setVelocityY(-330);
      }

   
        
        
      }
      
          
        }
      
    }
  

