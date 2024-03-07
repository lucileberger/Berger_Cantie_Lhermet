export default class niveau4 extends Phaser.Scene {
  // constructeur de la classe
  constructor() {
    super({
      key: "niveau4",
      physics: {
        // définition des parametres physiques
        default: "arcade", // mode arcade : le plus simple : des rectangles pour gérer les collisions. Pas de pentes
        arcade: {
          // parametres du mode arcade
          gravity: {
            y: 300 // gravité verticale : acceleration ddes corps en pixels par seconde
          },
          debug: false // permet de voir les hitbox et les vecteurs d'acceleration quand mis à true
        }
      } //  ici on précise le nom de la classe en tant qu'identifiant
    });
  }// chargement des librairies

  preload() {
    this.load.image("img_ciel", "src/assets/plateformeOk.jpg");
    this.load.image("img_plateforme", "src/assets/plateformeOk.jpg");
    this.load.image("img_etoile", "src/assets/bouledepapierokk.png"); 
    this.load.image("img_bombe", "src/assets/BouledePapier4.png"); 
    this.load.image("img_plateforme2", "src/assets/platformeok.png");
    this.load.image("come2", "src/assets/5rouge.png"); 
 

  
    this.load.spritesheet("img_perso", "src/assets/dude.png", {
      frameWidth: 70,
      frameHeight: 100
    }); 
  
    this.load.image("img_etoile", "src/assets/bouledepapier.jpg");
} 

create() {

  
this.add.text(50, 70, "Afin de sortir de cette salle : \n \nVous devez récupérer assez de boule de papier pour que le parchemin de sorti apparaisse.", {
  fontFamily: 'Arial, "Goudy Bookletter 1911", bold, Times, serif',
  fontSize: "15pt"
      });

  this.add.image(500, 800, "img_ciel");
  groupe_plateformes = this.physics.add.staticGroup();
  groupe_plateformes.create(200, 1400, "img_plateforme");
  groupe_plateformes.create(50, 644, "img_plateforme2");
  groupe_plateformes.create(1000, 784, "img_plateforme2");
  groupe_plateformes.create(800, 947, "img_plateforme2");
  groupe_plateformes.create(60, 947, "img_plateforme2");



  
  this.load.spritesheet("img_perso", "src/assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48,
  });
  player = this.physics.add.sprite(100, 450, "img_perso");
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
  this.physics.add.collider(player, groupe_plateformes); 

  //  On rajoute un groupe d'étoiles, vide pour l'instant
  groupe_etoiles = this.physics.add.group(); 
  // on rajoute 10 étoiles avec une boucle for :
  // on répartit les ajouts d'étoiles tous les 70 pixels sur l'axe des x
  for (var i = 0; i < 6; i++) {
    var coordX = 130 + 130 * i;
    groupe_etoiles.create(coordX, 10, "img_etoile");
  } 
  this.physics.add.collider(groupe_etoiles, groupe_plateformes); 
  groupe_etoiles.children.iterate(function iterateur(etoile_i) {
    // On tire un coefficient aléatoire de rerebond : valeur entre 0.4 et 0.8
    var coef_rebond = Phaser.Math.FloatBetween(0.3, 0.7);
    etoile_i.setBounceY(coef_rebond); // on attribut le coefficient de rebond à l'étoile etoile_i
  }); 
  this.physics.add.overlap(player, groupe_etoiles, ramasserEtoile, null, this);

  zone_texte_score = this.add.text(50, 170, 'score: 0', { fontSize: '64px', fill: '#fff', fontFamily: 'Arial, sans-serif'}); 

  bouton_play = this.add.image(920, 870, "come2").setDepth(1).setDisplaySize(50, 50);
  bouton_play.setInteractive();
  bouton_play.setVisible(false); 

 groupe_bombes = this.physics.add.group(); 
 this.physics.add.collider(groupe_bombes, groupe_plateformes); 
 this.physics.add.collider(player, groupe_bombes, chocAvecBombe, null, this); 
 this.clavier = this.input.keyboard.createCursorKeys();

 

 bouton_play.on("pointerup", () => {
  
  this.scene.start("selection");
  
  this.sonsword.stop()
  
})

if (score >= 200) {
  bouton_play.setVisible(true);
}
 
} 


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
  
    } 
   if (gameOver) {
       this.scene.switch("niveau9");
    
   }

    if (score >= 200) {
      bouton_play.setVisible(true);
    }

} 
}

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

 if (score >= 10) {
    bouton_play.setVisible(true);

  }
  } 

  function chocAvecBombe(un_player, une_bombe) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play("anim_face");
    gameOver = true;
  } 

var groupe_plateformes; 
var player;
var clavier; 
var groupe_etoiles;
var score = 0;
var zone_texte_score; 
var groupe_bombes; 
var gameOver = false;
var bouton_play