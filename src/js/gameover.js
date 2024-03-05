export default class gameover extends Phaser.Scene {
    // constructeur de la classe
    constructor() {
      super({
        key: "gameover" //  ici on précise le nom de la classe en tant qu'identifiant
      });
    }
    preload() {
      this.load.image("GO", "src/assets/GameOver.png");
    }
  
    create() {
      this.add.image(500, 500, "GO");
  
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
  
      
          }  
      }
    
  

  