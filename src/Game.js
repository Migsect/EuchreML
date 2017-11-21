"use strict";

const Player = require("./Player");
const Deck = require("./Deck");

class Game {
    constructor() {
        this.deck = null;
        this.score = {
            "red": 0,
            "black": 0
        };
        this.players = [
            new Player(),
            new Player(),
            new Player(),
            new Player()
        ]
        this.pastPlays = [];
        this.currentPlays = [];
        this.kitty = [];
    }

    /** Deal out cards to each of the players and select the kitty */
    deal() {
        this.deck = Deck.getShuffledDeck();
        this.players.forEach((player) => {
            player.hand = this.deck.deal(5);
        });
        this.kitty = this.deck.deal();
    }
}

module.exports = Game;