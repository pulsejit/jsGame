let player;

function Player(classType,health,mana,strength,agility,speed){
    this.classType = classType;
    this.health  = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}


let playerMoves ={
    calcAttack: function(){
        //who attack first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    }
    //player attacks
    let playerAttack = function(){
        let calcBaseDamage;
        if(player.mana > 0){
            calcBaseDamage = player.mana * player.strength / 1000;
        }else{
            calcBaseDamage = player.agility * player.strength / 1000;
        }
        let offsetDammage = Math.floor(Math.random()*Math.floor(10));
        let calcOutputDamge = calcBaseDamage + offsetDammage;
        //number of hits
        let numberOfHits = Math.floor(Math.random()*Math.floor(player.agility/10)/2)+1;//adding 1 so that we hit atleast one time.
        let attackValues = [calcOutputDamge, numberOfHits];
        return attackValues;
    }
    //enemy attacks !!
    let enemyAttack = function(){
        let calcBaseDamage;
        if(enemy.mana > 0){
            calcBaseDamage = enemy.mana * enemy.strength / 1000;
        }else{
            calcBaseDamage = enemy.agility * enemy.strength / 1000;
        }
        let offsetDammage = Math.floor(Math.random()*Math.floor(10));
        let calcOutputDamge = calcBaseDamage + offsetDammage;
        //number of hits
        let numberOfHits = Math.floor(Math.random()*Math.floor(enemy.agility/10)/2)+1;//adding 1 so that we hit atleast one time.
        let attackValues = [calcOutputDamge, numberOfHits];
        return attackValues;
    }

    //get player/enemy Health
    let getPlayerHealth = document.querySelector(".player-health");
    let getEnemyHealth = document.querySelector(".enemy-health");
}
