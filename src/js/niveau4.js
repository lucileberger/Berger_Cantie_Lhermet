export default class niveau4 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau4" //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }// chargement des librairies

/***********************************************************************/
/** CONFIGURATION GLOBALE DU JEU ET LANCEMENT 
/***********************************************************************/

preload() {
  this.load.image("img_ciel", "src/assets/fondenigmeattraperindice.png");
  this.load.image("img_plateforme", "./src/assets/platform.png");
  this.load.image("img_etoile", "src/assets/BouledePapier2.jpg"); 
  this.load.image("img_bombe", "src/assets/couteau.jpg"); 

  this.load.spritesheet("img_perso", "src/assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  }); 

  this.load.image("img_etoile", "src/assets/star.png"); 
}


/***********************************************************************/
/** FONCTION CREATE 
/***********************************************************************/

/* La fonction create est appelée lors du lancement de la scene
 * si on relance la scene, elle sera appelée a nouveau
 * on y trouve toutes les instructions permettant de créer la scene
 * placement des peronnages, des sprites, des platesformes, création des animations
 * ainsi que toutes les instructions permettant de planifier des evenements
 */
create() {
  this.add.image(500, 500, "img_ciel");
  groupe_plateformes = this.physics.add.staticGroup();
  
  this.load.spritesheet("img_perso", "src/assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48,
  });
  player = this.physics.add.sprite(100,800, "img_perso");
  player.setCollideWorldBounds(true);
  this.physics.add.collider(player, groupe_plateformes);
  player.setBounce(0.2); 
  clavier = this.input.keyboard.createCursorKeys(); 

  this.anims.create({
    key: "anim_tourne_gauche", // key est le nom de l'animation : doit etre unique poru la scene.
    frames: this.anims.generateFrameNumbers("img_perso", { start: 0, end: 3 }), // on prend toutes les frames de img perso numerotées de 0 à 3
    frameRate: 10, // vitesse de défilement des frames
    repeat: -1 // nombre de répétitions de l'animation. -1 = infini
  }); 
  
  this.anims.create({
    key: "anim_tourne_right", // key est le nom de l'animation : doit etre unique poru la scene.
    frames: this.anims.generateFrameNumbers("img_perso", { start: 5, end: 8 }), // on prend toutes les frames de img perso numerotées de 0 à 3
    frameRate: 10, // vitesse de défilement des frames
    repeat: -1 // nombre de répétitions de l'animation. -1 = infini
  }); 

  this.anims.create({
    key: "anim_face",
    frames: [{ key: "img_perso", frame: 4 }],
    frameRate: 20
  }); 
  
  //  On rajoute un groupe d'étoiles, vide pour l'instant
  groupe_etoiles = this.physics.add.group(); 
  // on rajoute 10 étoiles avec une boucle for :
  // on répartit les ajouts d'étoiles tous les 70 pixels sur l'axe des x
  for (var i = 0; i < 10; i++) {
    var coordX = 70 + 70 * i;
    groupe_etoiles.create(coordX, 10, "img_etoile");
  } 
  this.physics.add.collider(groupe_etoiles, groupe_plateformes); 
  groupe_etoiles.children.iterate(function iterateur(etoile_i) {
    // On tire un coefficient aléatoire de rerebond : valeur entre 0.4 et 0.8
    var coef_rebond = Phaser.Math.FloatBetween(0.4, 0.8);
    etoile_i.setBounceY(coef_rebond); // on attribut le coefficient de rebond à l'étoile etoile_i
  }); 
  this.physics.add.overlap(player, groupe_etoiles, ramasserEtoile, null, this);

  zone_texte_score = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' }); 

 groupe_bombes = this.physics.add.group(); 
 this.physics.add.collider(groupe_bombes, groupe_plateformes); 
 this.physics.add.collider(player, groupe_bombes, chocAvecBombe, null, this); 
}
/***********************************************************************/
/** FONCTION UPDATE 
/***********************************************************************/
update() {
  if (clavier.right.isDown) {
    player.setVelocityX(160);
    player.anims.play("anim_tourne_right", true);
  } 
  else if (clavier.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play("anim_tourne_gauche", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("anim_face", true);

  } 
  if (clavier.space.isDown && player.body.touching.down) {
    player.setVelocityY(-330);
    if (gameOver) {
      return;
    } 
} }
}




var player; // désigne le sprite du joueur
var clavier; 
var groupe_plateformes;
var groupe_etoiles;
var score = 0;
var zone_texte_score; 
var groupe_bombes; 
var gameOver = false;

function ramasserEtoile(un_player, une_etoile) {
  // on désactive le "corps physique" de l'étoile mais aussi sa texture
  // l'étoile existe alors sans exister : elle est invisible et ne peut plus intéragir
  une_etoile.disableBody(true, true);
// on regarde le nombre d'étoiles qui sont encore actives (non ramassées)
if (groupe_etoiles.countActive(true) === 0) {
    // on ajoute une nouvelle bombe au jeu
    // - on génère une nouvelle valeur x qui sera l'abcisse de la bombe
    var x;
    if (player.x < 400) {
      x = Phaser.Math.Between(400, 800);
    } else {
      x = Phaser.Math.Between(0, 400);
    }

    var une_bombe = groupe_bombes.create(x, 16, "img_bombe");
    une_bombe.setBounce(1);
    une_bombe.setCollideWorldBounds(true);
    une_bombe.setVelocity(Phaser.Math.Between(-200, 200), 20);
    une_bombe.allowGravity = false;
  // si ce nombre est égal à 0 : on va réactiver toutes les étoiles désactivées
  // pour chaque étoile etoile_i du groupe, on réacttive etoile_i avec la méthode enableBody
  // ceci s'ecrit bizarrement : avec un itérateur sur les enfants (children) du groupe (equivalent du for)
  groupe_etoiles.children.iterate(function iterateur(etoile_i) {
    etoile_i.enableBody(true, etoile_i.x, 0, true, true);
  });
} 
 //  on ajoute 10 points au score total, on met à jour l'affichage
 score += 10;
 zone_texte_score.setText("Score: " + score); 
  } 

  function chocAvecBombe(un_player, une_bombe) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play("anim_face");
    gameOver = true;
  } 
