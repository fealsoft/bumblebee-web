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
import {NamesTranslateComponent} from "./names/names-translate/names-translate.component";
import {SurnamesTranslateComponent} from "./surnames/surnames-translate/surnames-translate.component";
import {GeographicTranslateComponent} from "./geographic/geographic-translate/geographic-translate.component";

@NgModule({
  declarations: [
    AppComponent,
    WordsEnglishComponent,
    WordsUkrainianComponent,
    WordsTranslateComponent,
    NamesEnglishComponent,
    NamesUkrainianComponent,
    NamesTranslateComponent,
    SurnamesTranslateComponent,
    GeographicTranslateComponent
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
      { path: 'names-ukrainian', component: NamesUkrainianComponent},
      { path: 'names-translate', component: NamesTranslateComponent},
      { path: 'surnames-translate', component: SurnamesTranslateComponent},
      { path: 'geographic-translate', component: GeographicTranslateComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
