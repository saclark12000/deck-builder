import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table/table.component';
import { PlayerComponent } from './player/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PlayerComponent]
})
export class AppModule { }
