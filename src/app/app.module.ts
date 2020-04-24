import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewDeckComponent } from './new-deck/new-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    NewDeckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NewDeckComponent]
})
export class AppModule { }
