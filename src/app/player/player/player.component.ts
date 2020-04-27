import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as models from 'src/app/models/index.model';
import { DeckActionsService } from 'src/app/services/deck-actions.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements OnInit {
@Input() player: models.Player = new models.Player();
@Input() deck: models.Deck;

  constructor(private deckActions: DeckActionsService) { }

  ngOnInit() {
  }

  drawCard(deck: models.Deck, targetPlayer?: models.Player): void {
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
