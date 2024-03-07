export default class niveau5 extends Phaser.Scene {
    // constructeur de la classe
    constructor() {
      super({
        key: "niveau5" //  ici on précise le nom de la classe en tant qu'identifiant
      });
    }
    preload() {

        this.load.image("fond2", "src/assets/Enigme5.png");
        this.load.image("0", "src/assets/0.PNG");
        this.load.image("1", "src/assets/1.PNG");
        this.load.image("2", "src/assets/2bis.PNG");
        this.load.image("3", "src/assets/3bis.PNG");
        this.load.image("4jaune","src/assets/4jaune.png")
        
    }
  
    create() {
      this.cameras.main.setBackgroundColor('#FBC796');
        
        this.add.image(500, 500, "fond2");
    
        // ajout d'un texte distintcif  du niveau
       
    
        this.add.text(50, 100, "Quel chiffre se cache derrière le point d'interrogation ?", {
          fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
          fontSize: "40pt"
        });

        this.add.text(60, 800, "A vous de résoudre cette énigme pour obtenir un indice :", {
          fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
          fontSize: "30pt",
         
        });
    


        var bouton_play1 = this.add.image(800, 815, "4jaune").setDepth(1).setDisplaySize(55, 55);
bouton_play1.setInteractive();
bouton_play1.setVisible(false);
bouton_play1.on("pointerup", () => {

  this.scene.switch("selection");

});

    var bouton_play = this.add.image(200, 950, "0").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        bouton_play1.setVisible(true);
      
      });



      var bouton_play = this.add.image(400, 950, "1").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

      var bouton_play = this.add.image(600, 950, "2").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

      var bouton_play = this.add.image(800, 950, "3").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });



   
    
    
      }
    
      update() {
          
        }
      
    }
  