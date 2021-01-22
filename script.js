let currentMoney = 10000;

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
/*
function circleFight() {
	var c = document.getElementById("canvas");
	var circle1 = c.getContext("2d");
	circle1.beginPath();
	circle1.arc(100, 75, 50, 0, 2 * Math.PI);
	circle1.stroke();
	var circle2 = c.getContext("2d");
	circle2.beginPath();
	circle2.arc(200, 150, 50, 0, 2 * Math.PI);
	circle2.stroke();
}

function component(circle1, circle2) {
  this.speedX = Math.random() * 2;
  this.speedY = Math.random() * 2;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
*/
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
