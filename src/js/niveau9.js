// chargement des librairies

/***********************************************************************/

/** CONFIGURATION  L'HISTOIRE 
 

/***********************************************************************/

 

// configuration générale du jeu

export default class niveau9 extends Phaser.Scene {

  constructor() {

    super({ key: "niveau9" });

  }

  //on charge les images

  preload() {

    this.load.image("perdu", "src/assets/GameOver.png");
    this.load.image("bouton", "src/assets/BoutonMenu.png");


  }

  create() {

   // on place les éléments de fond

   this.add.image(500, 500, "perdu");

    //on ajoute un bouton de clic, nommé bouton_play

    var bouton_over= this.add.image(850, 80, "bouton").setDepth(1).setDisplaySize(150, 140);
    

    // Texte à ajouter en blanc gris avec la police Chiller en gras

    

    //=========================================================

    //on rend le bouton interratif

    bouton_over.setInteractive();
    

 

    //Cas ou la souris passe sur le bouton play

    bouton_over.on("pointerover", () => {

      // a remplir (faire changer la couleur du bouton comme pour le perso quand il meurt)

    });

   

    //Cas ou la souris ne passe plus sur le bouton play

    bouton_over.on("pointerout", () => {

      // a remplir

    });

 

    //Cas ou la sourris clique sur le bouton play :

    

    // on lance le niveau 1

    bouton_over.on("pointerup", () => {

      this.scene.switch("niveau1");
      
      
    });

    
  }

 

}


