// chargement des librairies

 

/***********************************************************************/

/** CONFIGURATION GLOBALE DU JEU ET LANCEMENT

/***********************************************************************/

 

// configuration générale du jeu

export default class menu extends Phaser.Scene {

  constructor() {

    super({ key: "menu" });

  }

  //on charge les images

  preload() {

    this.load.image("menu_fond", "./src/assets/Menu.png");

    this.load.image("imageBoutonPlay", "./src/assets/Bouton_Play1.png");

  }

  create() {

   // on place les éléments de fond

    this.add

      .image(0, 0, "menu_fond")

      .setOrigin(0)

      .setDepth(0)

      .setDisplaySize(1000,1000);

 

    //on ajoute un bouton de clic, nommé bouton_play

    var bouton_play = this.add.image(500, 600, "imageBoutonPlay").setDepth(1).setDisplaySize(90, 90);

  


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

      this.scene.start("histoire");

    });

  }

}