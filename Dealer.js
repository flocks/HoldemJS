// Dealer is in charge of distributing card to players, and drawing the board
// it's a kind of mediator you have to pass through 

var Deck = require('./Deck.js');

var deck = new Deck();

function Dealer() {
	this.startingHands = [];
}

// draw 5 card from deck
//cards argument is the array of cards which have already been dealt

Dealer.prototype.drawCard = function(card) {
	this.startingHands[card.getRank()] = [];
	this.startingHands[card.getRank()][card.getSuit()] = true;
}


Dealer.prototype.compareHands = function(twoCards1, twoCards2) {

	
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