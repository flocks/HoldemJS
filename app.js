var Card = require('./Card');
var Deck = require('./Deck');
var Hand = require('./Hand');


var hand = new Hand();
var deck = new Deck();

//deck.displayDeck();

var card1 = deck.drawCard();
var card2 = deck.drawCard();
var card3 = deck.drawCard();
var card4 = deck.drawCard();
var card5 = deck.drawCard();


var hand = new Hand();

hand.addCard(card1);
hand.addCard(card2);
hand.addCard(card3);
hand.addCard(card4);
hand.addCard(card5);


console.log(hand.ranks);

hand.displayHand();


