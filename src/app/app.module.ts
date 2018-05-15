import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordComponent } from './components/word.component';
import { MyInputComponent } from './components/my-input.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    MyInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
