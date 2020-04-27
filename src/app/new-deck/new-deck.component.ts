import { Component, OnInit } from '@angular/core';
import * as models from '../models/index.model';
import { DeckActionsService } from '../services/deck-actions.service';

@Component({
  selector: 'app-new-deck',
  templateUrl: './new-deck.component.html',
  styleUrls: ['./new-deck.component.css']
})
export class NewDeckComponent implements OnInit {

  constructor(private deckActions: DeckActionsService) { }

  ngOnInit() {
  }

  suits = [ 'S', 'H', 'C', 'D' ];
  values: number = 12;
  deck: models.Deck = this.deckActions.generateDeck(this.suits, this.values);
  table: models.Table = new models.Table();
  player: models.Player = new models.Player();

  getDeck() {
    return this.deck;
  }

  shuffleDeck(): void {
    this.deck = this.deckActions.shuffleDeck(this.deck);
  }

  dealCard(deck: models.Deck, targetPlayer?: models.Player): void {
    const dealCard = this.deckActions.dealCard(deck);
    this.player = {
      ...targetPlayer,
      hand: {
        full: false,
        cards: [
          dealCard.selectedCard,
          ...this.player.hand.cards
        ]
      }
    }
  }
}
