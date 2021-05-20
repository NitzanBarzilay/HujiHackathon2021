import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
