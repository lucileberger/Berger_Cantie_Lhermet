import * as fct from "/src/js/fonctions.js";

export default class niveau7 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau7" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("RG1","src/assets/Violet.png")
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
    

    
 // Initialisation du tableau pour suivre l'ordre des boutons pressés
 let ordreDesBoutonsPresses = [];
 let ordreCorrect = [1  ,  5  ,  4  ,  3  ,  2  ,  7];
 let self = this;

 this.infoText = this.add.text(400, 400, '', {
    fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
    fontSize: "22pt",
    color: "#ffffff" // Assurez-vous que la couleur du texte contraste bien avec le fond.
});
  

 // Fonction pour vérifier l'ordre des boutons pressés
 function verifierOrdre(numBouton) {
     ordreDesBoutonsPresses.push(numBouton); // Ajoute le numéro du bouton pressé au tableau

     // Vérifie si l'ordre des boutons pressés correspond à l'ordre correct
     if (ordreDesBoutonsPresses.length === ordreCorrect.length) {
         for (let i = 0; i < ordreCorrect.length; i++) {
             if (ordreDesBoutonsPresses[i] !== ordreCorrect[i]) {
                console.log("Ordre incorrect." + ordreDesBoutonsPresses);
                 console.log("Ordre attebdu." + ordreCorrect);
                 this.infoText.setText("Combinaison Incorret"+ ordreDesBoutonsPresses);
                 
                    
                 ordreDesBoutonsPresses = []; // Réinitialise si l'ordre est incorrect
                 return;
             }
         }

         // Si l'ordre est correct, effectue l'action souhaitée
         console.log("Ordre correct. Changement de scène.");
         self.scene.start("niveau8");
     }
 }

 // Configuration des boutons
 var bouton_play1 = this.add.image(300, 500, "RG1").setDepth(1).setDisplaySize(55, 55).setInteractive();
 bouton_play1.on('pointerdown', function () {
     verifierOrdre.call(this,1);
 }, this);
 var bouton_play2 = this.add.image(300, 600, "RG2").setDepth(1).setDisplaySize(55, 55).setInteractive();
 bouton_play2.on('pointerdown', function () {
     verifierOrdre.call(this,2);
 },this);
 var bouton_play3 = this.add.image(300, 700, "RG3").setDepth(1).setDisplaySize(55, 55).setInteractive();
 bouton_play3.on('pointerdown', function () {
     verifierOrdre.call(this,3);
 },this);
 var bouton_play4 = this.add.image(300, 800, "RG4").setDepth(1).setDisplaySize(55, 55).setInteractive();
 bouton_play4.on('pointerdown', function () {
     verifierOrdre.call(this,4);
 },this);
 var bouton_play5 = this.add.image(300, 900, "RG5").setDepth(1).setDisplaySize(55, 55).setInteractive();
 bouton_play5.on('pointerdown', function () {
     verifierOrdre.call(this,5);
 },this);
 var bouton_play6 = this.add.image(700, 500, "RG6").setDepth(1).setDisplaySize(55, 55).setInteractive();
 bouton_play6.on('pointerdown', function () {
     verifierOrdre.call(this,6);
 },this);
 var bouton_play7 = this.add.image(700, 600, "RG7").setDepth(1).setDisplaySize(55, 55).setInteractive();
 bouton_play7.on('pointerdown', function () {
     verifierOrdre.call(this,7);
 },this);
 var bouton_play8 = this.add.image(700, 700, "RG8").setDepth(1).setDisplaySize(55, 55).setInteractive();
 bouton_play8.on('pointerdown', function () {
     verifierOrdre.call(this,8);
 },this);
 var bouton_play9 = this.add.image(700, 800, "RG9").setDepth(1).setDisplaySize(55, 55).setInteractive();
 bouton_play9.on('pointerdown', function () {
     verifierOrdre.call(this,9);
 },this);
 var bouton_play10 = this.add.image(700, 900, "RG10").setDepth(1).setDisplaySize(55, 55).setInteractive();
 bouton_play10.on('pointerdown', function () {
     verifierOrdre.call(this,10);

 },this);
 

 bouton_play1.on("pointerdown", () => {

    bouton_play1.setTint(0x00FF00); // Change la teinte du bouton
  
    });

bouton_play1.on("pointerup", () => {

bouton_play1.clearTint(); // Réinitialise la teinte du bouton
      
        });
bouton_play2.on("pointerdown", () => {

bouton_play2.setTint(0x00FF00); // Change la teinte du bouton
          
            });
        
bouton_play2.on("pointerup", () => {
        
bouton_play2.clearTint(); // Réinitialise la teinte du bouton
              
                });

 bouton_play3.on("pointerdown", () => {

                    bouton_play3.setTint(0x00FF00); // Change la teinte du bouton
                  
                    });
                
                    bouton_play3.on("pointerup", () => {
                
                        bouton_play3.clearTint(); // Réinitialise la teinte du bouton
                      
                        });

    bouton_play4.on("pointerdown", () => {

                            bouton_play4.setTint(0x00FF00); // Change la teinte du bouton
                          
                            });
                        
                            bouton_play4.on("pointerup", () => {
                        
                                bouton_play4.clearTint(); // Réinitialise la teinte du bouton
                              
                                });


                                bouton_play5.on("pointerdown", () => {

                                    bouton_play5.setTint(0x00FF00); // Change la teinte du bouton
                                  
                                    });
                                
                                    bouton_play5.on("pointerup", () => {
                                
                                        bouton_play5.clearTint(); // Réinitialise la teinte du bouton
                                      
                                        });
                                        bouton_play6.on("pointerdown", () => {

                                            bouton_play6.setTint(0x00FF00); // Change la teinte du bouton
                                          
                                            });
                                        
                                            bouton_play6.on("pointerup", () => {
                                        
                                                bouton_play6.clearTint(); // Réinitialise la teinte du bouton
                                              
                                                });
                                                bouton_play7.on("pointerdown", () => {

                                                    bouton_play7.setTint(0x00FF00); // Change la teinte du bouton
                                                  
                                                    });
                                                
                                                    bouton_play7.on("pointerup", () => {
                                                
                                                        bouton_play7.clearTint(); // Réinitialise la teinte du bouton
                                                      
                                                        });
                                                        bouton_play8.on("pointerdown", () => {

                                                            bouton_play8.setTint(0x00FF00); // Change la teinte du bouton
                                                          
                                                            });
                                                        
                                                            bouton_play8.on("pointerup", () => {
                                                        
                                                                bouton_play8.clearTint(); // Réinitialise la teinte du bouton
                                                              
                                                                });
                                                                bouton_play9.on("pointerdown", () => {

                                                                    bouton_play9.setTint(0x00FF00); // Change la teinte du bouton
                                                                  
                                                                    });
                                                                
                                                                    bouton_play9.on("pointerup", () => {
                                                                
                                                                        bouton_play9.clearTint(); // Réinitialise la teinte du bouton
                                                                      
                                                                        });
                                                                        bouton_play10.on("pointerdown", () => {

                                                                            bouton_play10.setTint(0x00FF00); // Change la teinte du bouton
                                                                          
                                                                            });
                                                                        
                                                                            bouton_play10.on("pointerup", () => {
                                                                        
                                                                                bouton_play10.clearTint(); // Réinitialise la teinte du bouton
                                                                              
                                                                                });
        

    // ajout d'un texte distintcif  du niveau
    this.add.text(250, 100, "Vous avez bientôt fini votre quête : ", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });
    this.add.text(60, 220, " \nTout au long de la partie, vous avez trouvé des carrés de couleurs associés à des chiffres. \n Il faut maintenant les utiliser pour espérer sortir du manoir. ", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });

      this.add.text(330, 480, " D", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 580, " U", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 680, " P", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 780, " O", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 880, " N", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 480, " M", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 580, " T", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 680, " K", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 780, " C", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 880, " E", {
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
  


  
