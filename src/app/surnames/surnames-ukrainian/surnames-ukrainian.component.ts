import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {SurnameEng} from "../../SurnameEng";
import {SurnameUkr} from "../../SurnameUkr";
@Component({
  selector : 'app-surnames-ukrainian',
  templateUrl : './surnames-ukrainian.component.html'
})
export class SurnamesUkrainianComponent {

  surnameUkrs: SurnameUkr[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allUkrainianSurnames().subscribe((data: SurnameUkr[]) => {
      this.surnameUkrs = data;
    });
  }

}
