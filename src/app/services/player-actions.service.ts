import { Injectable } from '@angular/core';
import * as models from 'src/app/models/index.model';
import { Guid } from "guid-typescript";

@Injectable({
  providedIn: 'root'
})
export class PlayerActionsService {

  constructor() { }

  generatePlayer(table: models.Table): models.Player {
    let newPlayer = new models.Player();
    newPlayer.playerId = Guid.create();
    return newPlayer;
  }

  removePlayer(table:models.Table, targetPlayer: models.Player): void {
    const targetIndex = table.players.findIndex(player => player.playerId === targetPlayer.playerId)
    console.log(targetIndex);
    table.deck.discards = [
      ...table.deck.discards,
      ...table.players[targetIndex].hand.cards
    ]
    table.players.splice(targetIndex, 1);
  }
}
