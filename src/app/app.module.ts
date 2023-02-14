import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { EmployeerCardComponent } from './components/employeer-card/employeer-card.component';
import { EmployeerFormComponent } from './components/employeer-form/employeer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EmployeerCardComponent,
    EmployeerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
