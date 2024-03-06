import * as fct from "/src/js/fonctions.js";

export default class niveau9 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau9" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("perdu", "src/assets/GameOver.png");
    this.load.image("bouton", "src/assets/BoutonMenu.png");
    this.load.audio("lose", "./src/assets/Bruh.mp3");

         
}

  create() {
    this.game.config.sonsword.stop();
    this.game.config.lose = this.sound.add("lose");

this.game.config.lose.play();
    

fct.doNothing();
    fct.doAlsoNothing();
    this.add.image(500, 500, "perdu");

    // ajout d'un texte distintcif  du niveau
    this.add.text(300, 35, "Vous avez Perdu", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });

    this.add.text(600, 100, "Appuyez ici pour aller au menu", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "30pt"
    });

    

    this.porte_retour = this.physics.add.staticSprite(900, 200, "bouton");
   

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

      if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
        if (this.physics.overlap(this.player, this.porte_retour)) {        
          this.scene.switch("menu");
        }
      }
      
  
        
          }
        }
      
    }
  

