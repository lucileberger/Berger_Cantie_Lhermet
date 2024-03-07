
export default class niveau3 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau3" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("Horloge", "src/assets/Horaire.jpg");
    this.load.image("0356", "src/assets/0356.PNG");
    this.load.image("603", "src/assets/603.PNG");
    this.load.image("1036", "src/assets/1036.PNG");
    this.load.image("653", "src/assets/653.PNG");
    this.load.image("3bleu","src/assets/3bleu.png")

   
  }  

  create() {

    this.cameras.main.setBackgroundColor('#096A61');
    
    var bouton_play2 = this.add.image(800, 800, "3bleu").setDepth(1).setDisplaySize(55, 55);
bouton_play2.setInteractive();
bouton_play2.setVisible(false);
bouton_play2.on("pointerup", () => {

  this.scene.switch("selection");

});

var bouton_play = this.add.image(200, 950, "0356").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });



      var bouton_play = this.add.image(400, 950, "603").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

      var bouton_play = this.add.image(600, 950, "1036").setDepth(1).setDisplaySize(55, 55);
      bouton_play.setInteractive();
      bouton_play.on("pointerup", () => {
  
        this.scene.start("niveau9");
      
      });

      var bouton_play1 = this.add.image(800, 950, "653").setDepth(1).setDisplaySize(55, 55);
      bouton_play1.setInteractive();
      bouton_play1.on("pointerup", () => {
  
        bouton_play2.setVisible(true);      
      });
   



  
    this.add.image(500, 600, "Horloge");
  
    
    // Ajouter le texte de l'énigme avec la police Gabriolat

    this.add.text(300, 70, "Quelle heure est-il ?", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });

    this.add.text(60, 220, "Énoncé de l’énigme :\n \nMa montre digitale indique 06:35.  \n Quelle heure sera-t-il la prochaine fois que ces 4 chiffres seront à nouveau réunis?", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "26pt"
    });
   
    
    this.add.text(60, 800, "A vous de résoudre cette énigme pour obtenir un indice :", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
      fontSize: "30pt",
     
    });
    
    


  }

  update() {
   
    }
  }

