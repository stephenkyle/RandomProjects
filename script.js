let currentMoney = 10000;
var inventory = [];

function chanceCoin() {

    var coin = Math.round(Math.random() * 1);
    var bet = document.getElementById("coinInput").value;
    // make sure bet doesnt exceed current money
    if (bet > currentMoney) {
        alert("Cannot bet more money than you have.");
    } else {
        // check if heads or tails radio button is selected
        if (document.getElementById('heads').checked) {
            var choice = "heads";
        } else if (document.getElementById('tails').checked) {
            var choice = "tails";

        } else {
            alert("Please choice heads or tails.");
        }
        // check if nothing was selected
        if (choice != null) {
        	// subtract the amount better from money
            currentMoney -= bet;
            // set coin to heads or tails
            if (coin == 1) {
                coin = "heads";
            } else {
                coin = "tails";
            }
            // check if the guess and coin match
            if (choice == coin) {
                bet *= 2;
                currentMoney += bet;
                document.getElementById("money").innerHTML = "$" + currentMoney;
                document.getElementById("coin").innerHTML = coin;
            } else {
                document.getElementById("money").innerHTML = "$" + currentMoney;
                document.getElementById("coin").innerHTML = coin;
            }
        }
    }
}

function chanceCard() {
	// get how much is being betting
	var bet = document.getElementById("cardInput").value;
	// check if attempting to bet more than available
	if (bet > currentMoney) {
        alert("Cannot bet more money than you have.");
    } else {
    	// take bet from account
    	currentMoney -= bet;
    // get what user chose for suit
	var suitBet = document.getElementById("cardSuitInput").value;
	var cardSuit = ["Diamonds", "Hearts", "Spades", "Clubs"];
	// get a random suit
	cs = Math.round(Math.random() * (cardSuit.length - 1));
	thisSuit = cardSuit[cs];
	// display what suit was randomly chosen
	document.getElementById("suit").innerHTML = thisSuit;

	// get what use chose for value of card
	var valueBet = document.getElementById("cardValueInput").value;
	var cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
	// get what use chose for value of card
	cv = Math.round(Math.random() * (cardValue.length - 1));
	thisValue = cardValue[cv];
	// display what suit was randomaly chosen
	document.getElementById("value").innerHTML = thisValue;

	// check if user input suit and value match
	if (suitBet == thisSuit && valueBet == thisValue) {
		bet *= 52;
		console.log("right");
		// if they won then add bet back to their current money
		currentMoney += bet;
	} else if (suitBet == thisSuit) {
		bet *= 3;
		currentMoney += bet;
	} else if (valueBet == thisValue) {
		bet *= 10;
		currentMoney += bet;
	}
	document.getElementById("money").innerHTML = "$" + currentMoney;
	}
}

function rollChance() {
	let rollCost = 2000;
	if ((currentMoney - rollCost) < 0) {
		alert("You do not have enough money.");
	} else {
	currentMoney -= rollCost;
	document.getElementById("money").innerHTML = "$" + currentMoney;
	var rarity = [
	["s", "s", "s"],
	["s", "s", "s"],
	["s", "s", "s"],
	["s", "s", "s"],
	["g", "g", "g"],
	["g", "g", "g"],
	["g", "g", "g"],
	["g", "b", "b"],
	["g", "b", "b"],
	["b", "p", "p"],
	["p", "p", "o"],
	["o", "r", "gold"]
	];
	// use the for loop to make the animation
	// will do later
	for (roll = 0; roll < 1; roll++) {
		var rarityColor = Math.round(Math.random() * 11);
		var rarityNum = Math.round(Math.random() * 2);
		var itemR = rarity[rarityColor][rarityNum];
		document.getElementById("won").src = itemR + '.png';
		console.log(itemR);
	}
	// have to add to an array which will be used as storage for inventory
	inventory.push(itemR);
	console.log(inventory);
}}

/* coming back for this
function roulette() {
	var rNum = Math.round(Math.random() * 37);
	var redNums = ["1", "3", "5", "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "30", "32", "34", "36"]
	var blackNums = ["0", "2", "4", "6", "8", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29", "31", "33", "35"]
	// row 1 =  for (i = 0; i < redNums.length; i += 3)
	//rednums[0]
	// look at making an object  
	document.getElementById("roulette").innerHTML = rGuess;
	if 


}*/
// to do 
// daily login
// ai fighting?
// slots
// rolling dice
// shooting game that rewards for money && typing
// loan system
// lottery system
// save money system
// horse racing bet
// build a line set speed of each line to random speed
// spend money on a loot system, spins like csgo cases rare items
