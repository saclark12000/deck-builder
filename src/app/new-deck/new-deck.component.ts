import { Component, OnInit } from '@angular/core';
import * as models from '../models/index.model';

@Component({
  selector: 'app-new-deck',
  templateUrl: './new-deck.component.html',
  styleUrls: ['./new-deck.component.css']
})
export class NewDeckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  suits = [ 'S', 'H', 'C', 'D' ];
  values: number = 12;
  deck: models.Deck = this.newDeck(this.suits, this.values);

  newDeck(s: Array<string>, v: number): models.Deck{
    let returnArr: models.Deck = new models.Deck();
    s.forEach( suit => {
      for (let value = 0; value <= v; value++){
        returnArr.cards.push({"suit": suit, "value": value});
      }
    })
    return returnArr;
  }

  getDeck() {
    return this.deck;
  }

  shuffleDeck(deck: models.Deck): void {
    let deckIn = deck.cards;
    let deckOut = [];
    while(deckIn.length>0){
      deckOut.push(
        deckIn.splice(
          (Math.floor(Math.random()*(deckIn.length))), 1
        )[0]
      )
    }

    this.deck =  {
      shuffled: true,
      full: deck.full,
      cards: deckOut
    }
  }

  dealCard(deck: models.Deck): models.Card {
    const selectedCard = deck.cards.shift();
    this.deck = {
      ...this.deck,
      full: false,
      cards: deck.cards
    }

    return selectedCard;
  }

  generateNewDeck():void {
    this.deck = this.newDeck(this.suits, this.values);
  }

}
