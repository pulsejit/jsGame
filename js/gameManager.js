let gameManager = {
/*
    //now if we do this :-
    name: function(){
            let player = new Player():
    }
    //then we will be only assigining a value to the player variable and which is availbale everywhere in our program butt....

    //if we do this :-

    name:function(){
        let player = new Player();
    }

    //then this will create an object whose scope is only in the gamemanager file and we wont be able to access the file from the other files of the application

*/

 setGameStart : function(classType){
     this.resetPlayer(classType);
     this.setPreFight();
 },
 resetPlayer : function(classType){
     switch(classType){
         case "archer":
             player = new Player(classType, 200, 0, 200, 100, 50);
             break;
         case "assasin":
             player = new Player(classType, 100, 0, 100, 150, 50);
             break;
         case "traveller":
             player = new Player(classType, 80, 0, 50, 200, 50);
             break;
     }
     //fetching all the divs form the interfae.

     let getInterface = document.querySelector(".interface");

     //now we need to fill the informations on the second page so we have to use js to fetch some data form the index page.

     getInterface.innerHTML = '<img src = "img/avatar-player/' + classType.toLowerCase() + '.png" class = "img-avatar"><div><h3>' + classType + '</h3><p class = "player-health">Health:' + player.health + '</p><p>Mana:' + player.mana + '</p><p>Strength:' + player.strength + '</p><p>Agility:' + player.agility + '</p><p>Speed:' + player.speed + '</p></div>';
 },
 setPreFight : function(){
     let getHeader = document.querySelector(".header");
     let getActions = document.querySelector(".actions");
     let getArena = document.querySelector(".arena");

     getHeader.innerHTML = '<h2>Get an enemy !</h2>';
     getActions.innerHTML = '<a href = "#" class = "btn-prefight" onclick = "gameManager.setFight()">Find an enemy</a>';
     getArena.style.visibility = "visible";
 },
 setFight : function(){
     let getHeader = document.querySelector(".header");
      let getActions = document.querySelector(".actions");
     let getEnemy = document.querySelector(".enemy");

     // create the enemies

     let enemy00 = new Enemy("Night King", 100, 0, 50, 100, 50);
     let enemy01 = new Enemy("Warrior", 200, 0, 50, 150, 80);

     let chooseRandomEnemy = Math.floor(Math.random()*Math.floor(2));
     /*console.log(chooseRandomEnemy);*/

     switch (chooseRandomEnemy) {
         case 0:
            enemy = enemy00;
             break;
         case 1:
            enemy = enemy01;
             break;
     }
     getHeader.innerHTML = '<p>choose your move !</p>';
     getActions.innerHTML = '<a href = "#" class = "btn-prefight" onclick = "playerMoves.calcAttack()">Attack !!</a>';
     getEnemy.innerHTML = '<img src = "img/avatar-enemy/' + enemy.enemyType.toLowerCase() + '.png" class = "img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class = "enemy-health">Health:' + enemy.health + '</p><p>Mana:' + enemy.mana + '</p><p>Strength:' + enemy.strength + '</p><p>Agility:' + enemy.agility + '</p><p>Speed:' + enemy.speed + '</p></div>';


 }
}
