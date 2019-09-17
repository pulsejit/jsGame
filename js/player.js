let player;

function Player(classType,health,mana,strength,agility,speed){
    this.classType = classType;
    this.health  = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}


let playerMoves = {
    calcAttack: function(){
        //who attack first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        //player attacks
        let playerAttack = function() {
            let calcBaseDamage;
            if(player.mana > 0){
                calcBaseDamage = player.mana * player.strength / 1000;
            }else{
                calcBaseDamage = player.agility * player.strength / 1000;
            }
            let offsetDammage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamge = calcBaseDamage + offsetDammage;
            //number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;//adding 1 so that we hit atleast one time.
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
            let offsetDammage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamge = calcBaseDamage + offsetDammage;
            //number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;//adding 1 so that we hit atleast one time.
            let attackValues = [numberOfHits, calcOutputDamge];
            return attackValues;
        }

        //get player/enemy Health
        let getPlayerHealth = document.querySelector(".player-health");
        let getEnemyHealth = document.querySelector(".enemy-health");
        //initiate attacks
        if(getPlayerSpeed >= getEnemySpeed){
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("you hit"+playerAttackValues[0] + "Damage" + playerAttackValues[1] + "times.");
            if(enemy.health <=0){
                alert("you win ! refresh the browser to play again");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            }else{
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                //enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = EnemyAttackValues[0] * EnemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("enemy hit"+enemyAttackValues[1] + "Damage" + enemyAttackValues[0] + "times.");
                if(player.health <=0){
                    alert("you loose ! refresh the browser to play again");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }else{
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        }
        if(getEnemySpeed >= getPlayerSpeed){
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("enemy hit"+enemyAttackValues[0] + "Damage" + enemyAttackValues[1] + "times.");
            if(player.health <=0){
                alert("enemy wins ! refresh the browser to play again");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            }else{
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                //player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = PlayerAttackValues[0] * PlayerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("you hit"+playerAttackValues[1] + "Damage" + playerAttackValues[0] + "times.");
                if(enemy.health <=0){
                    alert("enemy looses ! refresh the browser to play again");
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getPlayerHealth.innerHTML = 'Health: ' + player.healt;
                }else{
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        }
    }
}
