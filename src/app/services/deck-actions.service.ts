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

  shuffleDeck(table: models.Table): void {
    let deckIn = table.deck.cards;
    let deckOut = [];
    while(deckIn.length > 0){
      deckOut.push(
        deckIn.splice(
          (Math.floor(Math.random()*(deckIn.length))), 1
        )[0]
      )
    }

    table.deck = {
      ...table.deck,
      shuffled: true,
      cards: deckOut
    }
  }

  dealCard(table:models.Table, targetPlayer: models.Player): void {
    table.deck.selectedCard = table.deck.cards.shift();
    table.players[targetPlayer.playerId].hand.cards = [
      ...table.players[targetPlayer.playerId].hand.cards,
      table.deck.selectedCard
    ]
  }

  dealMultipleCards(table: models.Table, amount:number, targetPlayer?: models.Player): void {
    const totalPlayers = !!targetPlayer ? 1 : table.players.length;
    const totalCards = totalPlayers * amount;

    // TODO: Check to make sure there are players
    // TODO: Throw error if attempt to deal too many cards
    if (totalCards <= table.deck.cards.length){
      if (!!targetPlayer) {
        for(let amt=amount; amt>0; amt--) {
            this.dealCard(table, targetPlayer);
        }
      } else {
        for(let amt=amount; amt>0; amt--) {
          table.players.forEach(player => this.dealCard(table, player));
        }
      }
    }
  }
}
