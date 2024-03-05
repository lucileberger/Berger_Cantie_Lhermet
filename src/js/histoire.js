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
  
        this.load.image("histoire", "./src/assets/hist.PNG");
  
      this.load.image("imageBoutonPlay", "./src/assets/Bouton_Play1.png");
  
    }
  
    create() {
  
     // on place les éléments de fond
  
     this.add

     .image(0, 0, "histoire")

     .setOrigin(0)

     .setDepth(0)

     .setDisplaySize(1000,1000);
  
      //on ajoute un bouton de clic, nommé bouton_play
  
      var bouton_play = this.add.image(500, 600, "imageBoutonPlay").setDepth(1).setDisplaySize(90, 90);
  
      // Texte à ajouter en blanc gris avec la police Chiller en gras
  
      var texte = this.add.text(60, 100, "Au cœur d'une forêt dense se dresse un manoir abandonné. \n\nSelon la légende, ce manoir renferme d'innombrables secrets et énigmes anciennes, \ngardées par un esprit mystérieux. \nLes rumeurs disent que quiconque parvient à résoudre toutes les énigmes du manoir \net par conséquent libérer l’esprit du château sera récompensé par un trésor légendaire. \nAttention, si vous échouez, vous y serez piégé pour l'éternité...\n\nVous incarnez un aventurier courageux qui décide de relever le défi \net de percer les mystères du manoir.", { font: "bold 35px Chiller", fill: "#c0c0c0" }).setDepth(1);
  
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
  
      });
  
    }
  
  }
