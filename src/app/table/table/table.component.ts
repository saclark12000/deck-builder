import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import * as models from 'src/app/models/index.model';
import { DeckActionsService } from 'src/app/services/deck-actions.service';
import { PlayerActionsService } from 'src/app/services/player-actions.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() table: models.Table = new models.Table();

  constructor(private deckActions: DeckActionsService, private playerActions: PlayerActionsService) { }

  ngOnInit() {
    this.table.deck = this.deckActions.generateDeck();
  }

  tableProps(){ console.log(this.table) }

  addPlayer() {
    this.table.players.push(this.playerActions.generatePlayer(this.table));
  }

  removePlayer(targetPlayer: models.Player) {
    this.playerActions.removePlayer(this.table, targetPlayer);
  }

  shuffleDeck(): void {
    this.deckActions.shuffleDeck(this.table);
  }

  drawCard(targetPlayer: models.Player){
    this.deckActions.dealCard(this.table, targetPlayer)
  }

  dealCards(amount:number){
    this.deckActions.dealMultipleCards(this.table, amount)
  }

  discard(targets: {targetPlayer: models.Player, targetCard: models.Card}){
    this.deckActions.discardCard(this.table, targets.targetPlayer, targets.targetCard)
  }

}
