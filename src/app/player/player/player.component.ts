import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import * as models from 'src/app/models/index.model';
import { DeckActionsService } from 'src/app/services/deck-actions.service';
import { PlayerActionsService } from 'src/app/services/player-actions.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class PlayerComponent implements OnInit {
@Input() player: models.Player = new models.Player();
@Input() deck: models.Deck;

@Output() dealCards = new EventEmitter<number>();
@Output() drawCard = new EventEmitter<models.Player>();
@Output() removePlayer = new EventEmitter<models.Player>();
@Output() discardCard = new EventEmitter<{targetPlayer:models.Player, targetCard: models.Card}>();

@ViewChild("dealAmount", {static:false}) dealAmount: any;

  constructor(private deckActions: DeckActionsService, private playerActions: PlayerActionsService) { }

  ngOnInit() {
  }

  showPlayer(){
    console.log(this.player);
  }

  draw(): void {
    this.drawCard.emit(this.player);
  }

  deal(amount: number) {
    this.dealCards.emit(amount);
    this.dealAmount.nativeElement.value = '';
  }

  discard(targetCard: models.Card) {
    this.discardCard.emit({targetPlayer: this.player, targetCard: targetCard})
  }

  exit() {
    this.removePlayer.emit(this.player);
  }

}
