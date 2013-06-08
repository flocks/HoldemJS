// a card is represented by a rank and a color

var ranks = ['Ace','2','3','4','5','6', '7', '8', '9','10','J','Q','K'];
var suits = ['hearts', 'diamonds', 'spades', 'clubs'];

function Card(rank, suit) {
	this.rank = rank;
	this.suit = suit;
}


module.exports = Card;