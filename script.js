let randomDamage = () => {
    return Math.floor(Math.random() * 10) + 1;
}

let chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * Math.floor(1) + 1);
    return randNum === 0 ? opt1 : opt2;
}

let attackPlayer = function(health) {
    return (`${health}` - `${randomDamage}`);
}

let logHealth = (player, health) => {
    console.log(`${player} health:${health}`);
}


let logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
}


let isDead = (health) => {
    i++;
    return (health <= 0);
}

function fight(player1, player2, player1Health, player2Health) {
    while (i = 0) {
    }
    var attacker = (`${chooseOption}`);
    chooseOption(player1, player2);

    if (`${attacker}` === `${player1}`) {
        player2Health = attackPlayer(player2Health);

    logHealth.call(player2, player2Health);

    isDead.call(player2Health);
    while (true) {
        logDeath.call(player1, player2);
        break;
   }
 }
    else {
    player1Health = attackPlayer(player1Health);
}
    logHealth.call(player1, player1Health);

    isDead.call(player1Health);
    while (true) {
        logDeath.call(player2, player1);
        break;
    }
}

fight.call("Patrick Johnson", "Alison Bourdon", 10, 10);