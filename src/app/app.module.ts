import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewDeckComponent } from './new-deck/new-deck.component';
import { TableComponent } from './table/table/table.component';
import { PlayerComponent } from './player/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    NewDeckComponent,
    TableComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NewDeckComponent, PlayerComponent]
})
export class AppModule { }
