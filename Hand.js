/*
	a hand is a collection of 5 cards 
*/
var hand = require('./Card');

function Hand() {

	this.cards = [];
	this.ranks = [];

	// we set the ranks to 0
	for(var i = 0; i < 13; i++) {
		this.ranks[i] = 0;
	}

}

Hand.prototype.addCard = function(Card) {
	
	if (this.cards.length == 5) {
		return false;
	}

	this.cards.push(Card);

	this.ranks[Card.getRank()]++;

}

Hand.prototype.compare = function(otherHand) {
	for (var i = 0; i < 6; i++) {
		if (this.value[i] > otherHand.value[i]) {
			return 1;
		}
		else if(this.value[i] < otherHand.value[i]) {
			return -1;
		}
		else {
			return 0;
		}
	}
}


module.exports = Hands;	