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

	var cardSuit = ["Diamond", "Heart", "Spade", "Club"];
	cs = Math.round(Math.random() * cardSuit.length);
	thisSuit = cardSuit[cs];

	var cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
	cv = Math.round(Math.random() * cardValue.length);
	thisValue = cardValue[cv];

	console.log(thisValue);
	console.log(thisSuit);
}