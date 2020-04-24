export class Card {
  suit: string;
  value: number
};

export class Deck {
    shuffled: boolean = false;
    full: boolean = true;
    cards: Array<Card> = [];
}

export enum suits {
  'S', 'H', 'C', 'D'
}
