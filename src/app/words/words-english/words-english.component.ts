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

      if(this.wordEngs !== undefined) {
        this.selectedValue = this.wordEngs[0].id;
        this.setSelectedObject();
        this.countValues = this.wordEngs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  setSelectedObject() {
    if(this.wordEngs !== undefined) {
      this.selectedObject = this.wordEngs.find((el: any) => {
        return el?.id == this.selectedValue;
      })
    }
  }

  getWord() {
    return this.selectedObject !== undefined ? this.selectedObject.name : ""
  }

}
