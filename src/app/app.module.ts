import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { WordComponent } from './components/word.component';
import { MyInputComponent } from './components/my-input.component';
import { PersonComponent } from './components/person.component';
import { ListWordsComponent } from './components/list-words/list-words.component';

import { WordFilterComponent } from './components/list-words/word-filter.component';
import { WordItemComponent } from './components/list-words/word-item.component';
import { WordFormComponent } from './components/list-words/word-form.component';

import { ParentComponent } from './components/interact/parent.component';
import { ChildComponent } from './components/interact/child.component';
import { countReducer } from './components/interact/countReducer';
import { wordsReducer, shouldShowFormReducer, filterModeReducer } from './components/list-words/reducers';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    MyInputComponent,
    PersonComponent,
    ListWordsComponent,
    WordFilterComponent,
    WordItemComponent,
    WordFormComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      count: countReducer,
      words: wordsReducer,
      shouldShowForm: shouldShowFormReducer,
      filterMode: filterModeReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
