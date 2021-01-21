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


// to do 
// daily login
// ai fighting?
// slots
// rolling dice
// shooting game that rewards for money
// loan system
// lottery system
