
var database;

var Canvas;
var gameState=0;
var playerCount;
var form, player, game;

function setup(){
    Canvas= createCanvas(400,400)
    database=firebase.database ()

    game= new Game();
    game.getState();
    game.start();   
}

function draw(){
    background("white");
    
    
}

