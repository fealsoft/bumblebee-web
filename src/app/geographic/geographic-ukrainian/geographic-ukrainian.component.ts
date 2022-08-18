import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {GeographicUkr} from "../../GeographicUkr";
import {CaseGeographicUkrLite} from "../../CaseGeographicUkrLite";
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

  caseGeographicUkrLite: CaseGeographicUkrLite | undefined;

  setSelectedObject() {
    if(this.geographicUkrs !== undefined) {
      this.selectedObject = this.geographicUkrs.find((el: any) => {
        return el?.id == this.selectedValue;
      })

      this.dataService.getCaseGeographicUkrLite(this.selectedValue).subscribe((data: CaseGeographicUkrLite) => {
        this.caseGeographicUkrLite = data;
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
