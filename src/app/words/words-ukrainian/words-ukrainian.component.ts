import { Component } from '@angular/core';
import {WordUkrLite} from "../../WordUkrLite";
import {DataService} from "../../app.dataService";
@Component({
  selector : 'app-words-ukrainian',
  templateUrl : './words-ukrainian.component.html'
})
export class WordsUkrainianComponent {

  wordUkrLites: WordUkrLite[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allUkrainianWords().subscribe((data: WordUkrLite[]) => {
      this.wordUkrLites = data;
    });
  }

}
