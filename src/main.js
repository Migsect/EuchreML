"use strict";

const Game = require("./Game");
const Deck = require("./Deck");

const deck = Deck.getShuffledDeck();
console.log(deck.deal(5).map(card => card.display));