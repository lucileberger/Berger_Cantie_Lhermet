export default class niveau2 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau2" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
   
  }

  create() {
    this.cameras.main.setSize(2000, 2000);
    this.cameras.main.setBackgroundColor("#26518E");
    // Centrer l'image "9"
   

    const centerX = 400;
    const centerY = 300;
    
    // Ajouter le texte de l'énigme avec la police Gabriolat

    this.add.text(300, 70, "Les neuf Jetons", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });

    this.add.text(60, 220, "Énoncé de l’énigme :\n \nNeuf jetons numérotés de 1 à 9 sont placés sur une grille carrée comme sur la figure.\nTu dois enlever trois jetons pour qu’il reste\n deux jetons dans chaque rangée et deux jetons dans chaque colonne.\nEnsuite, additionne les nombres écrits sur les trois jetons qu’il a enlevés.", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "26pt"
    });

    this.add.text(270, 880, "Quel est le plus grand résultat que l’on peut obtenir ?", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "22pt"
    });

    this.porte_retour = this.physics.add.staticSprite(100, 550, "img_porte1");



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

    if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
      if (this.physics.overlap(this.player, this.porte_retour)) {
        console.log("niveau 9 : retour vers selection");
        this.scene.switch("selection");
      }
    }
  }
}
