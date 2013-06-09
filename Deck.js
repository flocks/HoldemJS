// the deck contains the 52 cards of the game
// we suffle up the deck when instanciate

//var shuffle = require('utils/Suffle');
var Card = require('./Card.js');

function Deck() {
	this.cards = [];
	for(var c=0; c < 4; c++) {
		for(var r=0; r < 13; r++) {
			var card = new Card(r,c);
			this.cards.push(card);
		}
	}
}

Deck.prototype.displayDeck = function() {
	for(var i = 0; i < this.cards.length; i++) {
		this.cards[i].displayCard();
	}
}

Deck.prototype.drawCard = function() {
	var card = this.cards[0];
	this.cards.slice(0,1);
	return card;
}

Deck.prototype.getSizeDeck = function() {
	return this.cards.length;
}

module.exports = Deck;