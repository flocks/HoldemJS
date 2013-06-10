/*
	a hand is a collection of 5 cards 
*/
var hand = require('./Card');



function Hand() {
	this.cards = [];
	this.ranks = [];
	this.value = [];


	// we set the ranks to 0
	for(var i = 0; i < 13; i++) {
		this.ranks[i] = 0;
	}

}

Hand.prototype.computeValue = function() {
	// fill the value array of the hand
	var sameCards = 1;
	var sameCards2 = 1;
	var smallGroupRank = 0;
	var largeGroupRank = 0;
	// we assume it's true

	var isFlush = true; 
	var isStraight = false;
	var straightHighness = 0;

	for (var x=13; x>=1; x--) {
     if (this.ranks[x] > sameCards) {

         if (sameCards != 1) {
 	        sameCards2 = sameCards;
            smallGroupRank = largeGroupRank;
         }
         
        sameCards = this.ranks[x];
        largeGroupRank = x;
         
     } 
     else if (this.ranks[x] > sameCards2) {
         sameCards2 = this.ranks[x];
         smallGroupRank = x;
     	}
	}

	// check if hands is flushed
	for (var x=0; x<4; x++)  {
   	 	if ( this.cards[x].getSuit() != this.cards[x+1].getSuit() ) {
   	 		isFlush=false;
   	 	}
        
	}

	// check if hands is a straight

	if (this.ranks[10]==1 && this.ranks[11]==1 && this.ranks[12]==1 && this.ranks[13]==1 && this.ranks[1]==1) {
    	isStraight=true;
    	straightHighness=14; //higher than king
	}

	// 
	for(var x = 0; x < 9; x++) {
		if (this.ranks[x] == 1 && this.ranks[x+1] == 1 && this.ranks[x+2] == 1 && this.ranks[x+3] == 1) {
			isStraight = true;
			straightHighness = x+4;
			break; 
		}
	}

	var sortedRanks = [];
	// first we fill the array to 0, to avoid "undefined" value

	for(var x = 0; x < 6; x++) {
		sortedRanks[x] = 0;
	}


	var i = 0;

	if (this.ranks[1] == 1) {
		sortedRanks[i] = 14;
		i++;
	}

	for(var k = 13; k >= 2; k--) {
		if (this.ranks[k] == 1) { 
			sortedRanks[i] = k;
		}
	}

	// now we have all the informations for filling the value array

	//The first cell of the array is the type of the hand :
	// 1 for no pair ( so a hand "HIGH")
	// 2 for a pair
	// 3 for two pairs
	// 4 for a set
	// 5 for a straight
	// 6 for a flush
	// 7 for a full house
	// 8 for a four of a kind
	// 9 for straigth flush
	// we will use the next cells of the value array to store the others cards of the hand, ordered by hand



	if ( sameCards==1 ) {    
  	  	this.value[0]=1;          
   		this.value[1]=sortedRanks[0];  
    	this.value[2]=sortedRanks[1]; 
    	this.value[3]=sortedRanks[2];  
    	this.value[4]=sortedRanks[3];
    	this.value[5]=sortedRanks[4];
	}
	if (sameCards==2 && sameCards2==1) {
    	this.value[0]=2;                
    	this.value[1]=largeGroupRank;   
    	this.value[2]=sortedRanks[0];  
    	this.value[3]=sortedRanks[1];
    	this.value[4]=sortedRanks[2];
	}
	if (sameCards==2 && sameCards2==2) {
    	this.value[0]=3;
    	this.value[1]= largeGroupRank>smallGroupRank ? largeGroupRank : smallGroupRank;
    	this.value[2]= largeGroupRank<smallGroupRank ? largeGroupRank : smallGroupRank;
   	 	this.value[3]=sortedRanks[0];  
	}
	if (sameCards==3 && sameCards2!=2) {
    	this.value[0]=4;
    	this.value[1]= largeGroupRank;
    	this.value[2]=sortedRanks[0];
    	this.value[3]=sortedRanks[1];
	}
	if (isStraight) {
    	this.value[0]=5;
    	this.value[1]= straightHighness;
	}
	if (isFlush)   {
    	this.value[0]=6;
    	this.value[1]=sortedRanks[0]; //tie determined by ranks of cards
    	this.value[2]=sortedRanks[1];
    	this.value[3]=sortedRanks[2];
    	this.value[4]=sortedRanks[3];
    	this.value[5]=sortedRanks[4];
	}
	if (sameCards==3 && sameCards2==2)  {
   		this.value[0]=7;
    	this.value[1]=largeGroupRank;
    	this.value[2]=smallGroupRank;
	}

	if (sameCards==4)  {
   	 this.value[0]=8;
    	this.value[1]=largeGroupRank;
    	this.value[2]=sortedRanks[0];
	}

	if (isStraight && isFlush)  {
    	this.value[0]=9;
    	this.value[1]= straightHighness;
	}


}


Hand.prototype.addCard = function(Card) {
	
	if (this.cards.length == 5) {
		return false;
	}

	this.cards.push(Card);

	this.ranks[Card.getRank()]++;

	if (this.cards.length == 5) {
		this.computeValue();
	}

}

Hand.prototype.displayHand = function() {
	for(var i = 0; i < this.cards.length; i++) {
		this.cards[i].displayCard();
	}
}

Hand.prototype.compare = function(otherHand) {
	for (var i = 0; i < 6; i++) {
		if (this.value[i] > otherHand.value[i]) {
			return 1;
		}
		else if(this.value[i] < otherHand.value[i]) {
			return -1;
		}
	}

	return 0;
}

Hand.prototype.compareMultiple = function() {
	
}


module.exports = Hand;	