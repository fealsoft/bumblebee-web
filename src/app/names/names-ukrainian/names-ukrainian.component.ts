import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {NameUkr} from "../../NameUkr";
import {CaseNameUkr} from "../../CaseNameUkr";
import {CaseGeographicUkr} from "../../CaseGeographicUkr";
@Component({
  selector : 'app-names-ukrainian',
  templateUrl : './names-ukrainian.component.html'
})
export class NamesUkrainianComponent {

  nameUkrs: NameUkr[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allUkrainianNames().subscribe((data: NameUkr[]) => {
      this.nameUkrs = data;

      if(this.nameUkrs !== undefined) {
        this.selectedValue = this.nameUkrs[0].id;
        this.setSelectedObject();
        this.countValues = this.nameUkrs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  caseNameUkr: CaseNameUkr | undefined;


  setSelectedObject() {
    if(this.nameUkrs !== undefined) {
      this.selectedObject = this.nameUkrs.find((el: any) => {
        return el?.id == this.selectedValue;
      })

      this.dataService.getCaseNameUkr(this.selectedValue).subscribe((data: CaseNameUkr) => {
        this.caseNameUkr = data;
      });
    }
  }

  getName() {
    return this.selectedObject !== undefined ? this.selectedObject.name : ""
  }

  getGenderName() {
    return this.selectedObject !== undefined ? this.selectedObject.genderName : ""
  }


}
