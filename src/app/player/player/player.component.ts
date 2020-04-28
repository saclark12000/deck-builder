import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import * as models from 'src/app/models/index.model';
import { DeckActionsService } from 'src/app/services/deck-actions.service';

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

@ViewChild("dealAmount", {static:false}) dealAmount: any;

  constructor(private deckActions: DeckActionsService) { }

  ngOnInit() {
  }

  showPlayer(){
    console.log(this.player);
  }

  draw(): void {
    this.drawCard.emit(this.player);
  }

  deal(amount: number){
    this.dealCards.emit(amount);
    this.dealAmount.nativeElement.value = '';
  }

}
