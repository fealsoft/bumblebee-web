import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {GeographicUkr} from "../../GeographicUkr";
import {CaseGeographicUkr} from "../../CaseGeographicUkr";
@Component({
  selector : 'app-geographic-ukrainian',
  templateUrl : './geographic-ukrainian.component.html'
})
export class GeographicUkrainianComponent {

  geographicUkrs: GeographicUkr[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allUkrainianGeographic().subscribe((data: GeographicUkr[]) => {
      this.geographicUkrs = data;

      if(this.geographicUkrs !== undefined) {
        this.selectedValue = this.geographicUkrs[0].id;
        this.setSelectedObject();
        this.countValues = this.geographicUkrs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  caseGeographicUkr: CaseGeographicUkr | undefined;

  setSelectedObject() {
    if(this.geographicUkrs !== undefined) {
      this.selectedObject = this.geographicUkrs.find((el: any) => {
        return el?.id == this.selectedValue;
      })

      this.dataService.getCaseGeographicUkr(this.selectedValue).subscribe((data: CaseGeographicUkr) => {
        this.caseGeographicUkr = data;
      });
    }
  }

  getName() {
    return this.selectedObject !== undefined ? this.selectedObject.name : ""
  }

  getGeographicType() {
    return this.selectedObject !== undefined ? this.selectedObject.geographicType : ""
  }

  getGeographicGrammaticalGender() {
    return this.selectedObject !== undefined ? this.selectedObject.geographicGrammaticalGender : ""
  }

}
