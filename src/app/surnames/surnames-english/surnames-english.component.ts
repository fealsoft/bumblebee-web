import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {SurnameEng} from "../../SurnameEng";
@Component({
  selector : 'app-surnames-english',
  templateUrl : './surnames-english.component.html'
})
export class SurnamesEnglishComponent {

  surnameEngs: SurnameEng[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allEnglishSurnames().subscribe((data: SurnameEng[]) => {
      this.surnameEngs = data;
    });
  }

}
