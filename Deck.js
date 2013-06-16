// the deck contains the 52 cards of the game
// we shuffle up the deck when instanciate

var Shuffle = require('./Shuffle.js');
var Card = require('./Card.js');

function Deck() {
	this.cards = [];
	


	this.buildDeck();
	// we need to shuffle up the deck for drawing card ramdomly
	this.shuffleUp();
}

Deck.prototype.displayDeck = function() {
	for(var i = 0; i < this.cards.length; i++) {
		this.cards[i].displayCard();
	}
}

Deck.prototype.drawCard = function() {
	var card = this.cards[0];
	this.cards.splice(0,1);
	return card;
}

Deck.prototype.getSizeDeck = function() {
	return this.cards.length;
}

Deck.prototype.removeSpecificCard = function(Card) {
	console.log(this.cards);
}

Deck.prototype.shuffleUp = function() {
	var shuf = new Shuffle();
	shuf.shuffleUp(this.cards);
}

Deck.prototype.buildDeck = function() {

	for(var c=0; c < 4; c++) {
		for(var r=0; r < 13; r++) {
			var card = new Card(r,c);
			this.cards.push(card);
		}
	}

}

Deck.prototype.buildDeckWithoutStartingCards = function(startingCards) {
	// we build the deck without the players's starting hands

	//startingCards is an array 

	for(var c=0; c < 4; c++) {
		for(var r=0; r < 13; r++) {
			var card = new Card(r,c);
			if (typeof startingCards[r][c] == "undefined") {
				this.cards.push(card);
			}
		}
	}


	// we shuffle up
}

module.exports = Deck;