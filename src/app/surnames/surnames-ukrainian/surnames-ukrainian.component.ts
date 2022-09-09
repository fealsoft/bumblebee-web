import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {SurnameEng} from "../../SurnameEng";
import {SurnameUkr} from "../../SurnameUkr";
import {CaseNameUkr} from "../../CaseNameUkr";
import {CaseSurnameUkr} from "../../CaseSurnameUkr";
@Component({
  selector : 'app-surnames-ukrainian',
  templateUrl : './surnames-ukrainian.component.html'
})
export class SurnamesUkrainianComponent {

  surnameUkrs: SurnameUkr[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allUkrainianSurnames().subscribe((data: SurnameUkr[]) => {
      this.surnameUkrs = data;

      if(this.surnameUkrs !== undefined) {
        this.selectedValue = this.surnameUkrs[0].id;
        this.setSelectedObject();
        this.countValues = this.surnameUkrs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  caseSurnameUkr: CaseSurnameUkr | undefined;

  setSelectedObject() {
    if(this.surnameUkrs !== undefined) {
      this.selectedObject = this.surnameUkrs.find((el: any) => {
        return el?.id == this.selectedValue;
      })

      this.dataService.getCaseSurnameUkr(this.selectedValue).subscribe((data: CaseSurnameUkr) => {
        this.caseSurnameUkr = data;
      });
    }
  }

  getSurname() {
    return this.selectedObject !== undefined ? this.selectedObject.surname : ""
  }


}
