export default class niveau5 extends Phaser.Scene {
    // constructeur de la classe
    constructor() {
      super({
        key: "niveau5" //  ici on précise le nom de la classe en tant qu'identifiant
      });
    }
    preload() {

        this.load.image("fond2", "src/assets/Enigme5.png");
        this.load.image("Réponsea", "src/assets/0.jpg");
        this.load.image("Réponseb", "src/assets/2.jpg");
        this.load.image("Réponsec", "src/assets/3.jpg");
        this.load.image("Réponsed", "src/assets/4.jpg");
        this.load.image("RG5","src/assets/Rouge.jpg")
        
    }
  
    create() {
       
        
        this.add.image(500, 500, "fond2");
    
        // ajout d'un texte distintcif  du niveau
        this.add.text(50, 100, "5% des Francais peuvent y répondre ", {
          fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
          fontSize: "60pt"
        });
    
        this.add.text(60, 800, "Quel chiffre se cache derrière le point d'interrogation ?", {
          fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
          fontSize: "30pt"
        });
    
        this.porte7 = this.physics.add.staticSprite(800, 950, "img_porte7");200, 950,
        this.porte8 = this.physics.add.staticSprite(400, 950, "img_porte8");
        this.porte9 = this.physics.add.staticSprite(600, 950, "img_porte9");
        this.porte_retour = this.physics.add.staticSprite(200, 950, "img_porte1");
    
        this.player = this.physics.add.sprite(100, 450, "img_perso");
        this.player.refreshBody();
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);
        this.clavier = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.groupe_plateformes);
    
        var bouton_play = this.add.image(200, 950, "Réponsea").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
        var bouton_play = this.add.image(400, 950, "Réponseb").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
        var bouton_play = this.add.image(600, 950, "Réponsec").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
        var bouton_play = this.add.image(800, 950, "Réponsed").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
        var bouton_play = this.add.image(900, 50, "RG5").setDepth(1).setDisplaySize(55, 55);
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
  