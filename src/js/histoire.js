// chargement des librairies

/***********************************************************************/

/** CONFIGURATION  L'HISTOIRE 
 

/***********************************************************************/

 

// configuration générale du jeu

export default class histoire extends Phaser.Scene {

    constructor() {
  
      super({ key: "histoire" });
  
    }
  
    //on charge les images
  
    preload() {
  
        this.load.image("histoire", "./src/assets/parch.jpg");
  
      this.load.image("imageBoutonPlay", "./src/assets/Bouton_Play1.png");
      this.load.audio("sonsword", "./src/assets/Introduction.mp3");
  
    }
  
    create() {
  
     // on place les éléments de fond
  
     this.add

     .image(0, 0, "histoire")

     .setOrigin(0)

     .setDepth(0)

     .setDisplaySize(1000,1000);
  
      //on ajoute un bouton de clic, nommé bouton_play
  
      var bouton_play = this.add.image(400, 800, "imageBoutonPlay").setDepth(1).setDisplaySize(80, 80);
  
      // Texte à ajouter en blanc gris avec la police Chiller en gras
  
      var texte = this.add.text(240, 150, "Au cœur d'une forêt dense se dresse un manoir abandonné. \n\nSelon la légende, ce manoir renferme d'innombrables secrets \net énigmes anciennes, gardées par un esprit mystérieux. \nLes rumeurs disent que quiconque parvient à résoudre \ntoutes les énigmes du manoir et par conséquent \n libérer l’esprit du château sera récompensé \npar un trésor légendaire. \nAttention, si vous échouez, vous y serez piégé pour l'éternité...\n\nVous incarnez un aventurier courageux qui décide de relever\n le défi et de percer les mystères du manoir.", { font: "bold 26px Papyrus", fill: "#EDE9CE" }).setDepth(1);
  
      //=========================================================
  
      //on rend le bouton interratif
  
      bouton_play.setInteractive();
  
   
  
      //Cas ou la souris passe sur le bouton play
  
      bouton_play.on("pointerover", () => {
  
        // a remplir (faire changer la couleur du bouton comme pour le perso quand il meurt)
  
      });
  
     
  
      //Cas ou la souris ne passe plus sur le bouton play
  
      bouton_play.on("pointerout", () => {
  
        // a remplir
  
      });
  
   
  
      //Cas ou la sourris clique sur le bouton play :

      
  
      // on lance le niveau 1
  
      bouton_play.on("pointerup", () => {
  
        this.scene.start("selection");
        
        this.sonsword.stop();
      });
  
    }
  
  }
