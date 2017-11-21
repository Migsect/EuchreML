"use strict";

class Player {

    constructor(type) {
        this.type = type ? type : "random";
        this.hand = null;
    }

}

module.exports = Player;