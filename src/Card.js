"use strict";

const suits = [{
        name: "hearts",
        color: "red",
        weight: 0
    },
    {
        name: "diamonds",
        color: "red",
        weight: 100
    },
    {
        name: "spades",
        color: "black",
        weight: 200
    },
    {
        name: "clubs",
        color: "black",
        weight: 300
    }
];

const ranks = [{
        name: "9",
        weight: 1,
        calledWeight: 1
    },
    {
        name: "10",
        weight: 2,
        calledWeight: 2
    },
    {
        name: "jack",
        weight: 3,
        calledWeight: 10
    },
    {
        name: "queen",
        weight: 4,
        calledWeight: 4
    },
    {
        name: "king",
        weight: 5,
        calledWeight: 5
    },
    {
        name: "ace",
        weight: 6,
        calledWeight: 6
    }
];

class Card {
    static get suits() {
        return suits;
    }
    static get ranks() {
        return ranks;
    }

    static sortCards(cards) {
        return cards.sort((left, right) => {
            return left.weight - right.weight;
        });
    }

    static shuffleCards(cards) {

        /* Performing the shuffle */
        for (let i = 0; i < cards.length; i++) {
            /* Finding an index to swap*/
            const target = Math.floor(Math.random() * cards.length);
            if (target === i) {
                continue;
            }
            /* Performing the swap */
            const store = cards[target];
            cards[target] = cards[i];
            cards[i] = store;
        }

        return cards;
    }

    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

    get display() {
        return this.rank.name + " of " + this.suit.name;
    }

    get weight() {
        return this.rank.weight + this.suit.weight;
    }
}

module.exports = Card;