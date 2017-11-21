"use strict";

const Card = require("./Card");

class Deck {

    /**
     * Creates a sorted deck.
     *
     * @return     {Deck}  The sorted deck.
     */
    static getSortedDeck() {
        const cards = [];
        Card.suits.forEach(suit => Card.ranks.forEach(rank => cards.push(new Card(suit, rank))));

        return new Deck(cards);
    }

    /**
     * Constructs a shuffled deck of cards for a game of Euchre
     *
     * @return     {Deck}  The random deck.
     */
    static getShuffledDeck() {
        return Deck.getSortedDeck().shuffle();
    }

    constructor(cards) {
        this.cards = cards;
    }

    /**
     * Sorts the deck
     *
     * @return     Deck  The deck for chaining
     */
    sort() {
        Card.sortCards(this.cards);
        return this;
    }
    /**
     * Shuffles the deck
     *
     * @return     Deck  The deck for chaining
     */
    shuffle() {
        Card.shuffleCards(this.cards);
        return this;
    }

    /**
     * Removes an amount of cards from the deck and returns a list of those cards.
     *
     * @param      {Number}  amount  The amount
     * @return     {Card[]}  A Sorted hand of cards
     */
    deal(amount) {
        if (!amount) {
            amount = this.cards.length;
        }
        return Card.sortCards(this.cards.splice(this.cards.length - amount, amount));
    }
}

module.exports = Deck;