import { Injectable } from '@angular/core';
import * as models from 'src/app/models/index.model'

@Injectable({
  providedIn: 'root'
})
export class PlayerActionsService {

  constructor() { }

  generatePlayer(table: models.Table): models.Player {
    let newPlayer = new models.Player();
    newPlayer.playerId = table.players.length;
    return newPlayer;
  }

}
