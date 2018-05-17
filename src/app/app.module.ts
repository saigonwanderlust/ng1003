import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './components/word.component';
import { MyInputComponent } from './components/my-input.component';
import { PersonComponent } from './components/person.component';
import { ListWordsComponent } from './components/list-words/list-words.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    MyInputComponent,
    PersonComponent,
    ListWordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
