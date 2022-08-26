import { Component } from '@angular/core';
import {WordUkr} from "../../WordUkr";
import {DataService} from "../../app.dataService";
@Component({
  selector : 'app-words-ukrainian',
  templateUrl : './words-ukrainian.component.html'
})
export class WordsUkrainianComponent {

  wordUkrs: WordUkr[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allUkrainianWords().subscribe((data: WordUkr[]) => {
      this.wordUkrs = data;
    });
  }

}
