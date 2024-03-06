import * as fct from "/src/js/fonctions.js";

export default class niveau6 extends Phaser.Scene {
<<<<<<< HEAD

  constructor() {
      super({
        key: "niveau6" //  ici on précise le nom de la classe en tant qu'identifiant
      });
    }
    preload() {
  
      this.load.image("Map", "src/assets/Tileset.png");
  
  
      // chargement tuiles de jeu
  this.load.image("Phaser_tuilesdejeu2", "src/assets/Tileset.png");
  
  // chargement de la carte
  this.load.tilemapTiledJSON("carte6", "src/assets/cartelabyrhinte2.json");  
  
    }
  
    create() {
  
  // chargement de la carte
  const carteDuNiveau = this.add.tilemap("carte6");
  const tileset = carteDuNiveau.addTilesetImage(
       "Tileset",
       "Phaser_tuilesdejeu2"
     );  
  // chargement du calque calque_plateformes
  this.CalquedeTuiles1 = carteDuNiveau.createLayer(
  "CalquedeTuiles1",
  tileset
  ); 
  
  this.CalquedeTuiles1.setCollisionByProperty({ estSolide: true }); 


      /*************************************
     *  CREATION DU MONDE + PLATEFORMES  *
     *************************************/
  
    // On ajoute une simple image de fond, le ciel, au centre de la zone affichée (400, 300)
    // Par défaut le point d'ancrage d'une image est le centre de cette derniere
    this.add.image(500, 800, "carte6");
    groupe_plateformes = this.physics.add.staticGroup();


    this.player = this.physics.add.sprite(10, 10, "img_perso");
    this.player.refreshBody();
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.clavier = this.input.keyboard.createCursorKeys();

    // la création d'un groupes permet de gérer simultanément les éléments d'une meme famille
    //  Le groupe groupe_plateformes contiendra le sol et deux platesformes sur lesquelles sauter
    // notez le mot clé "staticGroup" : le static indique que ces élements sont fixes : pas de gravite,
    // ni de possibilité de les pousser.
  //  groupe_plateformes = this.physics.add.staticGroup();
    // une fois le groupe créé, on va créer les platesformes , le sol, et les ajouter au groupe groupe_plateformes
  
    // l'image img_plateforme fait 400x32. On en met 2 à coté pour faire le sol
    // la méthode create permet de créer et d'ajouter automatiquement des objets à un groupe
    // on précise 2 parametres : chaque coordonnées et la texture de l'objet, et "voila!"
  
    //  on ajoute 3 platesformes flottantes
  
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
  
      if (Phaser.Input.Keyboard.JustDown(this.clavier.space) == true) {
        if (this.physics.overlap(this.player, this.porte_retour)) {
          console.log("niveau 9 : retour vers selection");
          this.scene.switch("selection");
        }
      }
    }
  }
  
  var groupe_plateformes
=======
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau6" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }
  preload() {
    this.load.image("RG1","src/assets/Violet.jpg")
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
    

   var bouton_play = this.add.image(300, 500, "RG1").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(300, 600, "RG5").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive()
    var bouton_play = this.add.image(300, 700, "RG3").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(300, 800, "RG2").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive(); 
    var bouton_play = this.add.image(300, 900, "RG4").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();   
    var bouton_play = this.add.image(700, 500, "RG6").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(700, 600, "RG7").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(700, 700, "RG8").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(700, 800, "RG9").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();
    var bouton_play = this.add.image(700, 900, "RG10").setDepth(1).setDisplaySize(55, 55);
        bouton_play.setInteractive();



    // ajout d'un texte distintcif  du niveau
    this.add.text(250, 100, "Vous avez presque gagnez", {
      fontFamily: 'Gabriola, "Goudy Bookletter 1911", bold, Times, serif',
      fontSize: "60pt"
    });
    this.add.text(60, 220, " \nTous au long de la partie vous avez trouvé dse carrées de Couleurs différentes.\nMaintenant tu dois avec ces carrées écrire le bon mots pour pouvoir sortir de ce manoir ", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });

      this.add.text(330, 480, " F", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 580, " L", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 680, " B", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 780, "I", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(330, 880, " A", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 480, " P", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 580, " E", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 680, " O", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 780, " C", {
        fontFamily: 'Gabriola, "Goudy Bookletter 1911", Times, serif',
        fontSize: "26pt"
      });
      this.add.text(730, 880, " I", {
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
  


  
>>>>>>> bc0eeb031942b6f6318a68e880a3a8d4bbdba4e4
