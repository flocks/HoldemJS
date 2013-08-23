// a card is represented by a rank and a color

var ranks = ['A','2','3','4','5','6','7', '8', '9','10','J','Q','K'];
var suits = ['hearts', 'diamonds', 'spades', 'clubs'];

function Card(rank, suit) {
	this.rank = rank;
	this.suit = suit;
}

Card.prototype.getRank = function() {
	return this.rank;
}
Card.prototype.getSuit = function() {
	return this.suit;
}

Card.prototype.displayCard = function() {
	console.log(ranks[this.rank]+suits[this.suit].slice(0,1));
}

Card.prototype.isEqual = function(card) {
	return (card.getRank() == this.getRank() && card.getSuit() == this.getSuit());
}


module.exports = Card;