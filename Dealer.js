// Dealer is in charge of distributing card to players, and drawing the board
// it's a kind of mediator you have to pass through 

var Card = require('./Card.js');
var Deck = require('./Deck.js');
var Hand = require('./Hand.js');

var deck = new Deck();

function Dealer() {
	this.startingHands = [];
}

var isDealt = function(startingCards, card) {
	var found = false;
	while(i < startingCards.length && found == false) {
		if (startingCards[i].isEqual(card)) {
			found = true;
		}
		i++;
	}
	return found;
}

// handler method for parsing hand ranges into array of cards

var parseHH = function(hh) {
	var arr = hh.split('/');

	//tmp, TBI
	return arr;
}

var ranksMatching= { "A" : 0, "2" : 1, "3" : 2, "4" : 3 , '5': 4, '6' : 5, '7' : 6,'8' : 7, '9' : 8, 'T' : 9, 'J' : 10, 'Q' : 11, 'K' : 12}

// convert a string like Ac into an object Card
var convertHands = function(str) {

	var rank1 = str.slice(0,1);
	var rank2 = str.slice(1,2);

	
	suit1  = Math.floor(Math.random() * 3) + 1;


	var card1 = new Card(ranksMatching[rank1], suit1);

	suit2  = Math.floor(Math.random() * 3) + 1;

	// if it's a pair, can't be suitted
	if (ranksMatching[rank1] == ranksMatching[rank2]) {
		while ( suit1== suit2) {
			suit2  = Math.floor(Math.random() * 3) + 1;
		}
	}
	


	var card2 = new Card(ranksMatching[rank2], suit2);

	var arr = [];
	arr.push(card1);
	arr.push(card2);

	return arr;

}



// find among the board ( 5 cards ) the best combi of 5 cards

var findBestHand = function(twoCards, board) {
	// ex : startingCard : AK, board = AT2QT
	// there is 21 final hands possible : 5 cards among 7 cards ( 7! / 5! * (7-5)!) 
	

	var hand = new Hand();

	hand.addCard(twoCards[0]);
	hand.addCard(twoCards[1]);


	for(var i = 2; i < board.length; i++) {
		hand.addCard(board[i]);

	}
	return hand; // return board for testing
}

Dealer.prototype.compareHands = function(twoCards1, twoCards2) {

	// generate a board
	// find the best combi for twoCards1, then for twoCards2
	// compare the hands
	// repeat over 10k board
	// return avg result on %

	var h1  = convertHands(twoCards1);
	var h2  = convertHands(twoCards2);
	
	var startingCards = {};

	startingCards[h1[0].getRank()] = {};
	startingCards[h1[0].getRank()][h1[0].getSuit()] = true;
	startingCards[h1[1].getRank()] = {};
	startingCards[h1[1].getRank()][h1[1].getSuit()] = true;

	startingCards[h2[0].getRank()] = {};
	startingCards[h2[0].getRank()][h2[0].getSuit()] = true;
	startingCards[h2[1].getRank()] = {};
	startingCards[h2[1].getRank()][h2[1].getSuit()] = true;


	var deck = new Deck();

	var c = 0;
	var repeat = 1000;

	for(var i =0; i < repeat; i++) {
		deck.buildDeckWithoutStartingCards(startingCards);
	
		var board = deck.buildBoard();

		var bestHand1 = findBestHand(h1, board);
		var bestHand2 = findBestHand(h2, board);

		c += bestHand1.compare(bestHand2);
	}

	console.log((c * 100 /repeat) + '%');

	



	
}

Dealer.prototype.dealSpecificCard = function(card) {
	
}


//among the 21 combi, return the best hand
Dealer.prototype.computeBestHands = function(array) {

}

Dealer.prototype.permuteHands = function(startingCards, board) {
	// ex : startingCard : AK, board = AT2QT
	// there is 21 final hands possible : 5 cards among 7 cards ( 7! / 5! * (7-5)!) 
	// TODO : complete this shit, there is only 11 combi generated

	var arr = [];

	for(var i = 0; i < 2; i++) {
		for(var j = 0; j < 5; j++) {
			var hand =  board;
			hand[j] = startingCards[i];
			arr.push(hand);
		}
	}

	arr.push(board); // last permutation

	return arr;
}
module.exports = Dealer;