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
       
    this.load.image("Réponse1.1", "src/assets/Chiffre9.jpg");
    this.load.image("Réponse2.1", "src/assets/Chiffre15.jpg");
    this.load.image("Réponse3.1", "src/assets/Chiffre23.png");
    this.load.image("Réponse4.1", "src/assets/Chiffre27.jpg");
    this.load.image("RG1","src/assets/Violet.jpg")

  }

  create() {
    fct.doNothing();
    fct.doAlsoNothing();
    this.add.image(500, 500, "Les_triangles_cachés");

    // ajout d'un texte distintcif  du niveau
    this.add.text(250, 100, "Les triangles cachés", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });

    this.add.text(60, 800, "A vous de résoudre cette nouvelle énigme pour obtenir un nouvel indice:", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "30pt"
    });

    this.add.text(300, 850, "Combien comptez vous de triangles ?", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "22pt"
    });


    this.porte7 = this.physics.add.staticSprite(200, 950, "img_porte7");
    this.porte8 = this.physics.add.staticSprite(400, 950, "img_porte8");
    this.porte9 = this.physics.add.staticSprite(600, 950, "img_porte9");
    this.porte_retour = this.physics.add.staticSprite(800, 950, "img_porte1");


    this.player = this.physics.add.sprite(100, 450, "img_perso");
    this.player.refreshBody();
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.clavier = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(this.player, this.groupe_plateformes);

    var bouton_play = this.add.image(200, 950, "Réponse1.1").setDepth(1).setDisplaySize(55, 55);
    bouton_play.setInteractive();
    var bouton_play = this.add.image(400, 950, "Réponse2.1").setDepth(1).setDisplaySize(55, 55);
    bouton_play.setInteractive();
    var bouton_play = this.add.image(600, 950, "Réponse3.1").setDepth(1).setDisplaySize(55, 55);
    bouton_play.setInteractive();
    var bouton_play = this.add.image(800, 950, "Réponse4.1").setDepth(1).setDisplaySize(55, 55);
    bouton_play.setInteractive();
    var bouton_play = this.add.image(900, 50, "RG1").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();


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

