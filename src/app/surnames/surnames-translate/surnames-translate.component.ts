import { Component } from '@angular/core';
import {SurnameEng} from "../../SurnameEng";
import {DataService} from "../../app.dataService";
import {TranslateSurnameUkr} from "../../TranslateSurnameUkr";

@Component({
  selector : 'app-surnames-translate',
  templateUrl : './surnames-translate.component.html'
})
export class SurnamesTranslateComponent {

  surnameEngs: SurnameEng[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allEnglishSurnames().subscribe((data: SurnameEng[]) => {
      this.surnameEngs = data;

      if(this.surnameEngs !== undefined) {
        this.selectedValue = this.surnameEngs[0].id;
        this.getTranslate();
        this.countValues = this.surnameEngs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  translateSurnameUkr: TranslateSurnameUkr | undefined;

  getSurname() {
    return this.selectedObject !== undefined ? this.selectedObject.surname : ""
  }

  getPlural() {
    return this.selectedObject !== undefined ? this.selectedObject.plural : ""
  }

  getTranslate() {
    if(this.surnameEngs !== undefined) {
      this.selectedObject = this.surnameEngs.find((el: any) => {
        return el?.id == this.selectedValue;
      })

      if(this.selectedValue !== undefined) {
        this.dataService.getSurnameTranslate(this.selectedValue).subscribe((data: TranslateSurnameUkr) => {
          this.translateSurnameUkr = data;
        });
      }
    }
  }

}
