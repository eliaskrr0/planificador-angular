import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RutinasComponent } from './menu/rutinas/rutinas.component';
import { CalendarioComponent } from './menu/calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RutinasComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
