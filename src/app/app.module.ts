import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { DbzModule } from './dbz/dbz.module';
// import { CounterModule } from './counter/components/counter.module';
// import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    DbzModule,
    // CounterModule,
    // HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
