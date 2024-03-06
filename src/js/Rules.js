// chargement des librairies

/***********************************************************************/

/** CONFIGURATION  L'HISTOIRE 
 

/***********************************************************************/

 

// configuration générale du jeu

export default class Rules extends Phaser.Scene {

    constructor() {
  
      super({ key: "Rules" });
  
    }
  
    //on charge les images
  
    preload() {
  
    this.load.image("histoire", "./src/assets/parch.jpg");
  
      this.load.image("come", "./src/assets/come.png");
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
  
      var bouton_play = this.add.image(350, 750, "come").setDepth(1).setDisplaySize(150, 140);
      
  
      // Texte à ajouter en blanc gris avec la police Chiller en gras
  
      var texte = this.add.text(230, 150, "             Voici les règles du jeu : \n\n Le joueur explore le manoir à la recherche de 6 parchemins. \nLorsqu'il trouve un parchemin, il doit résoudre l'énigme associée pour progresser. \nChaque énigme résolue lui donne un indice pour identifier le nom du tueur. \nAttention, une mauvaise réponse met fin au jeu.\nUne fois les 6 parchemins récupérés, le joueur doit se rendre \nau centre de la carte, dans l'espace bleu, pour ouvrir le coffre \net découvrir l'identité du criminel. \nLe joueur sera récompensé d'un trésor s'il réussit à terminer la quête.", { font: "bold 24px Papyrus", fill: "#EDE9CE" }).setDepth(1);
  
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
        
        this.sonsword.stop()
      });

      
    }

   

}
  
  
