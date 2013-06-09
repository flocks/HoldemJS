var Card = require('./Card');
var Deck = require('./Deck');
var Hand = require('./Hand');


var hand = new Hand();
var deck = new Deck();

//deck.displayDeck();

var card1 = deck.drawCard();
var card2 = deck.drawCard();
var card3 = deck.drawCard();

card1.displayCard();
card2.displayCard();
card3.displayCard();

