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

      if(this.surnameEngs !== undefined) {
        this.selectedValue = this.surnameEngs[0].id;
        this.setSelectedObject();
        this.countValues = this.surnameEngs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  setSelectedObject() {
    if(this.surnameEngs !== undefined) {
      this.selectedObject = this.surnameEngs.find((el: any) => {
        return el?.id == this.selectedValue;
      })
    }
  }

  getSurname() {
    return this.selectedObject !== undefined ? this.selectedObject.surname : ""
  }

  getPlural() {
    return this.selectedObject !== undefined ? this.selectedObject.plural : ""
  }


}
