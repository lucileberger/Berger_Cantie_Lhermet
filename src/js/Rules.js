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
  
      var texte=this.add.text(220,150, " Regles du jeu : \n\n 1) Déplacez-vous sur le plateau de jeu afin de repérer les parchemins. \n2) Choissisez-en un et cliquez sur la barre espace. \n3) Vous arriverez sur une énigme ou un mini-jeu que vous devez résoudre\nafin de pourvoir sortir de la pièce. \n\n!  Pour obtenir tous les indices, vous devrez résoudre toutes les énigmes ! \n\n4) Regardez bien le carré de couleur afin de mémoriser sa couleur et\nle numéro apposé dessus. \n5) Une fois avoir récolté les 6 indices, dirigez-vous dans la pièce centrale\net cliquez sur le coffre \n6) A l'intérieur il vous faudra reconstituer le mot code grâce aux indices trouvés \n\n ATTENTION vous n'avez qu'une seule tentative afin de trouver le meutrier ", { font: "bold 19px Papyrus", fill: "#EDE9CE" }).setDepth(1);
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
  
  
