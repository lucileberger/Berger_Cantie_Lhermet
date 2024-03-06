
export default class niveau3 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau3" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("Horloge", "src/assets/Horaire.jpg");
    this.load.image("Réponse1", "src/assets/10H39.jpg");
    this.load.image("Réponse2", "src/assets/10H23.jpg");
    this.load.image("Réponse3", "src/assets/5H50.jpg");
    this.load.image("Réponse4", "src/assets/6H53.png");
    this.load.image("3bleu","src/assets/3bleu.png")

   
  }  

  create() {

    this.cameras.main.setBackgroundColor('#096A61');
    
    var bouton_play1 = this.add.image(800, 800, "3bleu").setDepth(1).setDisplaySize(55, 55);
bouton_play1.setInteractive();
bouton_play1.setVisible(false);
bouton_play1.on("pointerup", () => {

  this.scene.switch("selection");

});

var bouton_play = this.add.image(200, 950, "Réponse1").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });



      var bouton_play = this.add.image(400, 950, "Réponse2").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

      var bouton_play = this.add.image(600, 950, "Réponse3").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

      var bouton_play = this.add.image(800, 950, "Réponse4").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        bouton_play1.setVisible(true);      
      });
   




      
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
    this.add.text(220, 300, "Quelle heure sera-t-il la prochaine fois que ces 4 chiffres seront à nouveau réunis?.", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "22pt"
    });
    
    this.add.text(60, 800, "A vous de résoudre cette énigme pour obtenir un indice :", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "30pt",
     
    });
    
    


  }

  update() {
   
    }
  }

