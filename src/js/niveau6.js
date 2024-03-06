import * as fct from "/src/js/fonctions.js";

export default class niveau6 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau6" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("RG1","src/assets/Violet.jpg")
    this.load.image("RG5","src/assets/Rouge.jpg")
    this.load.image("RG3","src/assets/Bleue.jpg")
    this.load.image("RG2","src/assets/Vert.jpg")
    this.load.image("RG4","src/assets/Jaune.png")
    this.load.image("RG10","src/assets/Orange.jpg")
    this.load.image("RG6","src/assets/Marron.jpg")
    this.load.image("RG7","src/assets/Rose.jpg")
    this.load.image("RG8","src/assets/VertF.jpg")
    this.load.image("RG9","src/assets/BleuT.jpg")
    
   
  }

  create() {
    fct.doNothing();
    fct.doAlsoNothing();
    

   var bouton_play = this.add.image(300, 500, "RG1").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(300, 600, "RG5").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive()
    var bouton_play = this.add.image(300, 700, "RG3").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(300, 800, "RG2").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive(); 
    var bouton_play = this.add.image(300, 900, "RG4").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();   
    var bouton_play = this.add.image(700, 500, "RG6").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(700, 600, "RG7").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(700, 700, "RG8").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(700, 800, "RG9").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(700, 900, "RG10").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();



    // ajout d'un texte distintcif  du niveau
    this.add.text(250, 100, "Vous avez presque gagnez", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });
    this.add.text(60, 220, " \nTous au long de la partie vous avez trouvé dse carrées de Couleurs différentes.\nMaintenant tu dois avec ces carrées écrire le bon mots pour pouvoir sortir de ce manoir ", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });

      this.add.text(330, 480, " F", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 580, " L", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 680, " B", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 780, "I", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 880, " A", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 480, " P", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 580, " E", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 680, " O", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 780, " C", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 880, " I", {
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
  


  