import { Injectable } from '@angular/core';
import * as models from '../models/index.model';

@Injectable({
  providedIn: 'root'
})
export class DeckActionsService {

  constructor() { }

  suits = [ 'S', 'H', 'C', 'D' ];
  values: number = 12;

  generateDeck(s: Array<string> = this.suits, v: number = this.values): models.Deck{
    let returnArr: models.Deck = new models.Deck();
    s.forEach( suit => {
      for (let value = 0; value <= v; value++){
        returnArr.cards.push({"suit": suit, "value": value});
      }
    })
    return returnArr;
  }

  shuffleDeck(deck: models.Deck): models.Deck {
    let deckIn = deck.cards;
    let deckOut = [];
    while(deckIn.length>0){
      deckOut.push(
        deckIn.splice(
          (Math.floor(Math.random()*(deckIn.length))), 1
        )[0]
      )
    }

    return {
      ...deck,
      shuffled: true,
      full: deck.full,
      cards: deckOut
    }
  }

  dealCard(deck: models.Deck): models.Deck {
    const selectedCard = deck.cards.shift();
    return {
      ...deck,
      full: false,
      selectedCard: selectedCard,
      cards: deck.cards
    }
  }

}
