// Dealer is in charge of distributing card to players, and drawing the board
// it's a kind of mediator you have to pass through 

var Deck = require('./Deck.js');

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

var ranksMatching= { "A" : 0, "2" : 1, "3" : 2, "4" : 3 , '5': 4, '6' : 5, '7' : 6,'8' : 7, '9' : 8, 'T' : 9, 'J' : 10; 'Q' : 11, 'K' : 12}
var suitMatching = {"h": 0, "d" : 1, "s" : 2, "c" : 3};

// convert a string like Ac into an object Card
var convertHands = function(str) {
	var rank = str.splice(0,1);
	var suit = str.splice(1,1);

	var card = new Card(ranksMatching[rank], suitMatching[suit]);

	return card;

}

// draw 5 card from deck
//cards argument is the array of cards which have already been dealt

Dealer.prototype.drawCard = function(card) {
	this.startingHands[card.getRank()] = [];
	this.startingHands[card.getRank()][card.getSuit()] = true;
}


Dealer.prototype.compareHands = function(twoCards1, twoCards2) {

	// generate a board
	// find the best combi for twoCards1, then for twoCards2
	// compare the hands
	// repeat over 10k board
	// return avg result on %

	var h1  = convertHands(twoCards1);
	var h2  = convertHands(twoCards2);

	var deck = new Deck();

	deck.buildDeckWithoutStartingCards([h1, h2]);
	
	
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