import * as fct from "/src/js/fonctions.js";

/***********************************************************************/
/** VARIABLES GLOBALES 
/***********************************************************************/

var player; // désigne le sprite du joueur
var clavier; // pour la gestion du clavier
var groupe_plateformes;
var light;
var velocityX;
var velocityY;
var porte1Active;
var porte2Active ;
var porte3Active;
var porte4Active;
var porte5Active;
var porte6Active;
var porte7Active;

// définition de la classe "selection"
export default class selection extends Phaser.Scene {
  constructor() {
    super({ key: "selection" }); // mettre le meme nom que le nom de la classe
  }

  /***********************************************************************/
  /** FONCTION PRELOAD 
/***********************************************************************/

  /** La fonction preload est appelée une et une seule fois,
   * lors du chargement de la scene dans le jeu.
   * On y trouve surtout le chargement des assets (images, son ..)
   */
  preload() {
    // tous les assets du jeu sont placés dans le sous-répertoire src/assets/
    this.load.image("Map", "src/assets/Map3.png");
    this.load.spritesheet("img_perso", "src/assets/perso2new.png", {
      frameWidth: 25.5,
      frameHeight: 50,
    });
    this.load.image("img_porte1", "src/assets/Parchemin.png");
    this.load.image("img_porte2", "src/assets/Parchemin.png");
    this.load.image("img_porte3", "src/assets/Parchemin.png");
    this.load.image("img_porte4", "src/assets/Parchemin.png");
    this.load.image("img_porte5", "src/assets/Parchemin.png");
    this.load.image("img_porte6", "src/assets/Parchemin.png");
    this.load.image("img_porte7", "src/assets/Parchemin.png");
    this.load.image("img_porte8", "src/assets/Parchemin.png");
    this.load.image("img_porte9", "src/assets/Parchemin.png");
    this.load.image("fin", "src/assets/Coffre.png");
    



    // chargement tuiles de jeu
    this.load.image("Phaser_tuiles_de_jeu", "src/assets/Map3.png");
    this.load.tilemapTiledJSON("carte", "src/assets/MapFinal6.json");
    this.load.audio("sonsword", "./src/assets/Introduction.mp3");



  }


  create() {
    this.game.config.musiqueme.stop();

    this.game.config.sonsword = this.sound.add("sonsword");
    this.game.config.sonsword.play({ loop: true });


    this.game.config.sonsword.play();

    // chargement de la carte
    const carteDuNiveau = this.add.tilemap("carte");
    const tileset = carteDuNiveau.addTilesetImage(
      "tuiles_de_jeu",
      "Phaser_tuiles_de_jeu"
    );
    // chargement du calque calque_plateformes
    this.calque_plateformes = carteDuNiveau.createLayer(
      "calque_plateformes",
      tileset
    );
    this.calque_plateformes.setCollisionByProperty({ estSolide: true });

    fct.doNothing();
    fct.doAlsoNothing();

    /*************************************
     *  CREATION DU MONDE + PLATEFORMES  *
     *************************************/

    // On ajoute une simple image de fond, le ciel, au centre de la zone affichée (400, 300)
    // Par défaut le point d'ancrage d'une image est le centre de cette derniere
    var imgcarte = this.add.image(500, 470, "Map");

    // la création d'un groupes permet de gérer simultanément les éléments d'une meme famille
    //  Le groupe groupe_plateformes contiendra le sol et deux platesformes sur lesquelles sauter
    // notez le mot clé "staticGroup" : le static indique que ces élements sont fixes : pas de gravite,
    // ni de possibilité de les pousser.
    groupe_plateformes = this.physics.add.staticGroup();
    // une fois le groupe créé, on va créer les platesformes , le sol, et les ajouter au groupe groupe_plateformes

    // l'image img_plateforme fait 400x32. On en met 2 à coté pour faire le sol
    // la méthode create permet de créer et d'ajouter automatiquement des objets à un groupe
    // on précise 2 parametres : chaque coordonnées et la texture de l'objet, et "voila!"

    //  on ajoute 3 platesformes flottantes


    /****************************
     *  Ajout des portes   *
     ****************************/
    this.porte1 = this.physics.add.staticSprite(350, 90, "img_porte1");
    this.porte2 = this.physics.add.staticSprite(60, 200, "img_porte2");
    this.porte3 = this.physics.add.staticSprite(700, 90, "img_porte3");
    this.porte4 = this.physics.add.staticSprite(90, 850, "img_porte4");
    this.porte5 = this.physics.add.staticSprite(950, 150, "img_porte5");
    this.porte6 = this.physics.add.staticSprite(950, 850, "img_porte6");

    //this.porte8 = this.physics.add.staticSprite(950, 150, "img_porte8");
    //this.porte9 = this.physics.add.staticSprite(950, 850, "img_porte9");



    // On créée un nouveeau personnage : player
    player = this.physics.add.sprite(100, 450, "img_perso");
    this.physics.add.collider(player, this.calque_plateformes);

    //  propriétées physiqyes de l'objet player :
    // on donne un petit coefficient de rebond
    player.setCollideWorldBounds(true); // le player se cognera contre les bords du monde
    this.cameras.main.startFollow(player);

    /***************************
     *  CREATION DES ANIMATIONS *
     ****************************/
    // dans cette partie, on crée les animations, à partir des spritesheet
    // chaque animation est une succession de frame à vitesse de défilement défini
    // une animation doit avoir un nom. Quand on voudra la jouer sur un sprite, on utilisera la méthode play()
    // creation de l'animation "anim_tourne_gauche" qui sera jouée sur le player lorsque ce dernier tourne à gauche
    this.anims.create({
      key: "anim_tourne_gauche", // key est le nom de l'animation : doit etre unique poru la scene.
      frames: this.anims.generateFrameNumbers("img_perso", {
        start: 13,
        end: 0
      }), // on prend toutes les frames de img perso numerotées de 0 à 3
      frameRate: 10, // vitesse de défilement des frames
      repeat: -1 // nombre de répétitions de l'animation. -1 = infini
    });

    // creation de l'animation "anim_tourne_face" qui sera jouée sur le player lorsque ce dernier n'avance pas.
    this.anims.create({
      key: "anim_face",
      frames: [{ key: "img_perso", frame: 0 }],
      frameRate: 20
    });

    // creation de l'animation "anim_tourne_droite" qui sera jouée sur le player lorsque ce dernier tourne à droite
    this.anims.create({
      key: "anim_tourne_droite",
      frames: this.anims.generateFrameNumbers("img_perso", {
        start: 0,
        end: 13
      }),
      frameRate: 10,
      repeat: -1
    });

    /***********************
     *  CREATION DU CLAVIER *
     ************************/
    // ceci permet de creer un clavier et de mapper des touches, connaitre l'état des touches
    clavier = this.input.keyboard.createCursorKeys();

    /*****************************************************
     *  GESTION DES INTERATIONS ENTRE  GROUPES ET ELEMENTS *
     ******************************************************/
    player.setPipeline('Light2D');
    this.calque_plateformes.setPipeline('Light2D');
    imgcarte.setPipeline('Light2D');

    light = this.lights.addLight(500, 500, 500);
    console.log()
    light.setIntensity(2);
    this.lights.enable().setAmbientColor(0x000000);



    porte1Active = true;
    porte2Active = true;
    porte3Active = true;
    porte4Active = true;
    porte5Active = true;
    porte6Active = true;


    
    // Supposez que porte7Active commence par false, puisqu'elle ne sera active que sous certaines conditions
    porte7Active = false;

    


  }


  /***********************************************************************/
  /** FONCTION UPDATE 
/***********************************************************************/

  update() {



    // Lorsque vous désactivez une porte, mettez à jour sa variable
    if (this.physics.overlap(player, this.porte1)) {
      this.scene.switch("niveau1");
      this.porte1.disableBody(true, true);
      porte1Active = false;
    }
    if (this.physics.overlap(player, this.porte2)) {
      this.scene.switch("niveau2");
      this.porte2.disableBody(true, true);
      porte2Active = false;
    }
    if (this.physics.overlap(player, this.porte3)) {
      this.scene.switch("niveau3");
      this.porte3.disableBody(true, true);
      porte3Active = false;
    }
    if (this.physics.overlap(player, this.porte4)) {
      this.scene.switch("niveau4");
      this.porte4.disableBody(true, true);
      porte4Active = false;
    }
    if (this.physics.overlap(player, this.porte5)) {
      this.scene.switch("niveau5");
      this.porte5.disableBody(true, true);
      porte5Active = false;
    }
    if (this.physics.overlap(player, this.porte6)) {
      this.scene.switch("niveau6");
      this.porte6.disableBody(true, true);
      porte6Active = false;
    }
    
    // Ensuite, vérifiez si toutes les portes sont désactivées pour activer la porte 7
    if (!porte1Active && !porte2Active  && !porte5Active && !porte6Active) {
      
      if (!porte7Active) {
        console.log("porte 7 desact");
        this.porte7 = this.physics.add.staticSprite(510, 465, "fin");
        porte7Active = true; // Assurez-vous que la porte 7 est marquée comme active
      }
    }

    // Vitesse de déplacement
    const speed = 140;

    // Détection de la pression des touches pour le mouvement horizontal
    if (clavier.left.isDown) {
      velocityX = -speed;
      player.setFlipX(true);
    } else if (clavier.right.isDown) {
      velocityX = speed;
      player.setFlipX(false);

    } else {
      velocityX = 0; // Aucune touche horizontale pressée
    }

    // Détection de la pression des touches pour le mouvement vertical
    if (clavier.up.isDown) {
      velocityY = -speed;
    } else if (clavier.down.isDown) {
      velocityY = speed;
    } else {
      velocityY = 0; // Aucune touche verticale pressée
    }

    // Appliquez les vitesses calculées au joueur
    player.setVelocityX(velocityX);
    player.setVelocityY(velocityY);

    // Animation basée sur la direction du mouvement
    if (velocityX < 0) {
      player.anims.play("anim_tourne_gauche", true);
    } else if (velocityX > 0) {
      player.anims.play("anim_tourne_droite", true);
    } else if (velocityY < 0) {
      // Ajoutez ici l'animation pour se déplacer vers le haut, si disponible
      player.anims.play("anim_tourne_haut", true);
    } else if (velocityY > 0) {
      // Ajoutez ici l'animation pour se déplacer vers le bas, si disponible
      player.anims.play("anim_tourne_bas", true);
    } else {
      // Animation par défaut (idling) si le personnage ne se déplace pas
    }

    if (velocityX === 0 && velocityY === 0) {
      // Aucun mouvement : jouer l'animation d'idle
      player.anims.play("anim_face", true);
    }

    light.x = player.x;
    light.y = player.y;

    if (clavier.up.isDown && player.body.touching.down) {
      player.setVelocityY(-330);
    }

    if (Phaser.Input.Keyboard.JustDown(clavier.space) == true) {
      if (this.physics.overlap(player, this.porte1)) {
        this.scene.switch("niveau1");
        this.porte1.disableBody(true, true);
      }


      if (this.physics.overlap(player, this.porte2)) {
        this.scene.switch("niveau2");
        this.porte2.disableBody(true, true);
      }




      if (this.physics.overlap(player, this.porte3)) {
        this.scene.switch("niveau3");
        this.porte3.disableBody(true, true);
      }



      if (this.physics.overlap(player, this.porte4)) {
        this.scene.switch("niveau4");
        this.porte4.disableBody(true, true);
      }



      if (this.physics.overlap(player, this.porte5)) {
        this.scene.switch("niveau5");
        this.porte5.disableBody(true, true);
      }



      if (this.physics.overlap(player, this.porte6)) {
        this.scene.switch("niveau6");
        this.porte6.disableBody(true, true);
      }


      if (this.physics.overlap(player, this.porte7)) {
        this.scene.switch("niveau7");
        this.porte7.disableBody(true, true);
      }


      if (this.physics.overlap(player, this.porte8)) {
        this.scene.switch("niveau8");
        this.porte8.disableBody(true, true);
      }


      if (this.physics.overlap(player, this.porte9)) {
        this.scene.switch("niveau9");
        this.porte9.disableBody(true, true);
      }
    }

    this.cameras.main.startFollow(player);
    this.cameras.main.setZoom(2.5);
  }
}

/***********************************************************************/
/** CONFIGURATION GLOBALE DU JEU ET LANCEMENT 
/***********************************************************************/
