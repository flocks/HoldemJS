var Card = require('./Card');
var Deck = require('./Deck');
var Hand = require('./Hand');
var Dealer = require('./Dealer');

var dealeur = new Dealer();

dealeur.compareHands('AA', 'KK');

/*
var hand = new Hand();
var deck = new Deck();

//deck.displayDeck();

var card1 = deck.drawCard();
var card2 = deck.drawCard();
var card3 = deck.drawCard();
var card4 = deck.drawCard();
var card5 = deck.drawCard();

var card6 = deck.drawCard();
var card7 = deck.drawCard();
var card8 = deck.drawCard();
var card9 = deck.drawCard();
var card10 = deck.drawCard();


var hand = new Hand();

hand.addCard(card1);
hand.addCard(card2);
hand.addCard(card3);
hand.addCard(card4);
hand.addCard(card5);

var hand2 = new Hand();
hand2.addCard(card6);
hand2.addCard(card7);
hand2.addCard(card8);
hand2.addCard(card9);
hand2.addCard(card10);


var startingHands = [card1, card2];
var board = hand;



hand.displayHand();
console.log("---------");
hand2.displayHand();
console.log("---------");
*/


