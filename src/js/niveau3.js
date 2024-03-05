
export default class niveau3 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau3" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("Horloge", "src/assets/Horaire.jpg");
    this.load.image("Réponse1.2", "src/assets/10H39.jpg");
    this.load.image("Réponse2.2", "src/assets/10H23.jpg");
    this.load.image("Réponse3.2", "src/assets/5H50.jpg");
    this.load.image("Réponse4.2", "src/assets/6H53.png");
    this.load.image("RG3","src/assets/Bleu.jpg")

   
  }

  create() {
   
  
    this.add.image(500, 600, "Horloge");
  
    
    // Ajouter le texte de l'énigme avec la police Gabriolat

    this.add.text(300, 70, "Quelle heure est-il ?", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });

    this.add.text(60, 220, "Énoncé de l’énigme :\n \nMa montre digitale indique 06:35.", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "26pt"
    });
    this.add.text(220, 830, "Quelle heure sera-t-il la prochaine fois que ces 4 chiffres seront à nouveau réunis?.", {
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

    var bouton_play = this.add.image(200, 950, "Réponse1.2").setDepth(1).setDisplaySize(70, 70);
    bouton_play.setInteractive();
    var bouton_play = this.add.image(400, 950, "Réponse2.2").setDepth(1).setDisplaySize(70, 70);
    bouton_play.setInteractive();
    var bouton_play = this.add.image(600, 950, "Réponse3.2").setDepth(1).setDisplaySize(70, 70);
    bouton_play.setInteractive();
    var bouton_play = this.add.image(800, 950, "Réponse4.2").setDepth(1).setDisplaySize(70, 70);
    bouton_play.setInteractive();
    var bouton_play = this.add.image(900, 50, "RG3").setDepth(1).setDisplaySize(55, 55);
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
