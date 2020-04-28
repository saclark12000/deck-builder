import { Guid } from "guid-typescript";

export class Card {
  cardId: Guid;
  suit: string = 'None';
  value: number = -1;
};

export class Deck {
    shuffled: boolean = false;
    full: boolean = true;
    selectedCard: Card = new Card();
    cards: Array<Card> = [];
    discards: Array<Card> = [];
}

export class Player {
  playerId: Guid;
  hand: Hand = new Hand();
}

export class Hand {
  full: boolean = false;
  cards: Array<Card> = [];
}

export class Table {
  players: Array<Player> = [];
  dealer: Player = new Player();
  deck: Deck = new Deck();
}
