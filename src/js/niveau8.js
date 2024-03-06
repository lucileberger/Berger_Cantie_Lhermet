import * as fct from "/src/js/fonctions.js";

export default class niveau8 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau8" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("RG1","src/assets/Violet.jpg")
    this.load.image("RG5","src/assets/Rouge.jpg")
    this.load.image("RG3","src/assets/Bleu.jpg")
    this.load.image("RG2","src/assets/Vert.jpg")
    
   
  }

  create() {
    fct.doNothing();
    fct.doAlsoNothing();
    this.add.image(200, 400, "RG1");
    this.add.image(300, 500, "RG5");
    this.add.image(400, 600, "RG3");
    this.add.image(500, 700, "RG2");
   

    // ajout d'un texte distintcif  du niveau
    this.add.text(250, 100, "Vous avez presque gagnez", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });
    this.add.text(60, 220, "Énoncé de l’énigme :\n \nTous au long de la partie vous avez trouvé dse carrées de Couleurs différentes.\nMaintenant tu dois avec ces carrées écrire le bon mots pour pouvoir sortir de ce manoir ", {
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
  

