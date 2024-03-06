import * as fct from "/src/js/fonctions.js";

export default class niveau1 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau1" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("Les_triangles_cachés", "src/assets/Les_triangles_cachés.png");
       
    this.load.image("Réponse19", "src/assets/19.png");
    this.load.image("Réponse15", "src/assets/Chiffre15.png");
    this.load.image("Réponse23", "src/assets/Chiffre23.png");
    this.load.image("Réponse27", "src/assets/Chiffre27.png");
    this.load.image("Lestrianglescaches", "src/assets/Lestrianglescaches.png");
    this.load.image("1violet","src/assets/1violet.png")
    
  }

  create() {
// pour les bouttons 

var bouton_play1 = this.add.image(800, 800, "1violet").setDepth(1).setDisplaySize(55, 55);
bouton_play1.setInteractive();
bouton_play1.setVisible(false);
bouton_play1.on("pointerup", () => {

  this.scene.switch("selection");

});

var bouton_play = this.add.image(200, 950, "Réponse19").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        bouton_play1.setVisible(true);
      
      });



      var bouton_play = this.add.image(400, 950, "Réponse15").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

      var bouton_play = this.add.image(600, 950, "Réponse23").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

      var bouton_play = this.add.image(800, 950, "Réponse27").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

      

    







    this.cameras.main.setBackgroundColor('#f5f5dc');
    this.add.image(500, 500, "Lestrianglescaches");

  
    // ajout d'un texte distintcif  du niveau
    this.add.text(250, 100, "Les triangles cachés : ", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "65pt",
      color: '#191970' // Bleu marine foncé
    });
    
    this.add.text(60, 800, "A vous de résoudre cette énigme pour obtenir un indice :", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "30pt",
      color: '#191970' // Bleu marine foncé
    });
    
    this.add.text(300, 200, "Combien comptez-vous de triangles ?", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "22pt",
      color: '#191970' // Bleu marine foncé
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

      if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
        if (this.physics.overlap(this.player, this.porte_retour))        
          this.scene.switch("selection");
         if (this.physics.overlap(this.player, this.porte9))
          this.scene.switch("niveau9");
          if (this.physics.overlap(this.player, this.porte7))
          this.scene.switch("niveau9");
          if (this.physics.overlap(this.player, this.porte8))
          this.scene.switch("niveau9");
        
        
        
      }
      
          
        }
      
    }
  }

