import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from "@angular/material/menu";
import {WordsEnglishComponent} from "./words/words-english/words-english.component";
import {RouterModule} from "@angular/router";
import {WordsUkrainianComponent} from "./words/words-ukrainian/words-ukrainian.component";
import {WordsTranslateComponent} from "./words/words-translate/words-translate.component";
import {NamesEnglishComponent} from "./names/names-english/names-english.component";
import {NamesUkrainianComponent} from "./names/names-ukrainian/names-ukrainian.component";

@NgModule({
  declarations: [
    AppComponent,
    WordsEnglishComponent,
    WordsUkrainianComponent,
    WordsTranslateComponent,
    NamesEnglishComponent,
    NamesUkrainianComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: '', component: WordsEnglishComponent},
      { path: 'words-english', component: WordsEnglishComponent},
      { path: 'words-ukrainian', component: WordsUkrainianComponent},
      { path: 'words-translate', component: WordsTranslateComponent},
      { path: 'names-english', component: NamesEnglishComponent},
      { path: 'names-ukrainian', component: NamesUkrainianComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
