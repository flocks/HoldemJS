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

Dealer.prototype.drawBoard = function(cards) {
//	deck.removeSpecificCard();
} 

module.exports = Dealer;