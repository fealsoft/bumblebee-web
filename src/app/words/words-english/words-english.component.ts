import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {WordEngLite} from "../../WordEngLite";
@Component({
  selector : 'app-words-english',
  templateUrl : './words-english.component.html'
})
export class WordsEnglishComponent {

  wordEngLites: WordEngLite[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allEnglishWords().subscribe((data: WordEngLite[]) => {
      this.wordEngLites = data;
    });
  }

}
