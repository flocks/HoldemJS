/*
	a hand is a collection of 5 cards 
*/
var hand = require('./Card');



function Hand() {

	this.cards = [];
	this.ranks = [];
	this.value = [];
	this.sameCard = 1;
	this.sameCards2 = 1;
	this.smallGroupRank = 0;
	this.largeGroupRank = 0;
	this.isFlush = true;

	// we set the ranks to 0
	for(var i = 0; i < 13; i++) {
		this.ranks[i] = 0;
	}

}

Hand.prototype.computeValue = function() {
	// fill the value array of the hand


	for (var x=13; x>=1; x--) {
     if (this.ranks[x] > this.sameCards) {
         if (this.sameCards != 1)
         //if sameCards was not the default value
         {
             this.sameCards2 = this.sameCards;
             this.smallGroupRank = this.largeGroupRank;
         }
         
        this.sameCards = this.ranks[x];
        this.largeGroupRank = x;
         
     } else if (this.ranks[x] > this.sameCards2) {
         this.sameCards2 = this.ranks[x];
         this.smallGroupRank = x;
     	}
	}

	for (var x=0; x<4; x++)  {
   	 	if ( this.cards[x].getSuit() != this.cards[x+1].getSuit() ) {
   	 		this.isFlush=false;
   	 	}
        
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


module.exports = Hand;	