
class Game {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.currentCardIndex = 0;
    }

    createCard() {

    }

    randomizeCards() {

    }

    getCard() {
        return this.cards[this.currentCardIndex];
    }

    getNextCard() {
        this.currentCardIndex++;
        return this.cards[this.currentCardIndex];
    }

    renderGame(){

    }
}