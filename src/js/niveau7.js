export default class niveau2 extends Phaser.Scene {
    // constructeur de la classe
    constructor() {
      super({
        key: "niveau7" //  ici on précise le nom de la classe en tant qu'identifiant
      });
    }
    preload() {}
  
    create() {
      this.add.image(400, 300, "img_ciel");
      this.groupe_plateformes = this.physics.add.staticGroup();
      this.groupe_plateformes.create(200, 584, "img_plateforme");
      this.groupe_plateformes.create(600, 584, "img_plateforme");
      // ajout d'un texte distintcif  du niveau
      this.add.text(400, 100, "Vous êtes dans le niveau 7", {
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',
        fontSize: "22pt"
      });
  
      this.porte_retour = this.physics.add.staticSprite(100, 550, "img_porte7");
  
      this.player = this.physics.add.sprite(100, 450, "img_perso");
      this.player.refreshBody();
      this.player.setBounce(0.2);
      this.player.setCollideWorldBounds(true);
      this.clavier = this.input.keyboard.createCursorKeys();
      this.physics.add.collider(this.player, this.groupe_plateformes);
    }
  
    update() {
      
    if (clavier.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play("anim_tourne_gauche", true);
      } else if (clavier.right.isDown) {
        player.setVelocityX(160);
        player.anims.play("anim_tourne_droite", true);
      } else if (clavier.up.isDown) {
        player.setVelocityY(-160);
      } else if (clavier.down.isDown) {
        player.setVelocityY(160);
      } else {
        player.setVelocityX(0);
        player.setVelocityY(0);
        player.anims.play("anim_face");
      }
  
      if (clavier.up.isDown && player.body.touching.down) {
        player.setVelocityY(-330);
      }
  
      if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
        if (this.physics.overlap(this.player, this.porte_retour)) {
          console.log("niveau 7 : retour vers selection");
          this.scene.switch("selection");
        }
      }
    }
  }
  