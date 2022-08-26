import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {WordEng} from "../../WordEng";
@Component({
  selector : 'app-words-english',
  templateUrl : './words-english.component.html'
})
export class WordsEnglishComponent {

  wordEngs: WordEng[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allEnglishWords().subscribe((data: WordEng[]) => {
      this.wordEngs = data;
    });
  }

}
