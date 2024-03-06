export default class niveau7 extends Phaser.Scene {
    // constructeur de la classe
    constructor() {
      super({
        key: "niveau7" //  ici on précise le nom de la classe en tant qu'identifiant
      });
    }
    preload() {

      this.load.image("Map", "src/assets/Tileset.png");


      // chargement tuiles de jeu
this.load.image("Phaser_tuilesdejeu", "src/assets/Tileset.png");

// chargement de la carte
this.load.tilemapTiledJSON("carte1", "src/assets/cartelabyrhinte2.json");  

    }
  
    create() {

 // chargement de la carte
 const carteDuNiveau = this.add.tilemap("carte1");
 const tileset = carteDuNiveau.addTilesetImage(
       "Tileset",
       "Phaser_tuilesdejeu"
     );  
 // chargement du calque calque_plateformes
 this.CalquedeTuiles1 = carteDuNiveau.createLayer(
 "CalquedeTuiles1",
 tileset
 ); 


      /*************************************
     *  CREATION DU MONDE + PLATEFORMES  *
     *************************************/

    // On ajoute une simple image de fond, le ciel, au centre de la zone affichée (400, 300)
    // Par défaut le point d'ancrage d'une image est le centre de cette derniere
    this.add.image(500, 500, "Map");

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
  