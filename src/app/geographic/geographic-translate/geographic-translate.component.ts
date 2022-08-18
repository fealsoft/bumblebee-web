import { Component } from '@angular/core';
import {GeographicEng} from "../../GeographicEng";
import {DataService} from "../../app.dataService";
import {GeographicUkr} from "../../GeographicUkr";
@Component({
  selector : 'app-geographic-translate',
  templateUrl : './geographic-translate.component.html'
})
export class GeographicTranslateComponent {
  geographicEngs: GeographicEng[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allEnglishGeographic().subscribe((data: GeographicEng[]) => {
      this.geographicEngs = data;

      if(this.geographicEngs !== undefined) {
        this.selectedValue = this.geographicEngs[0].id;
        this.getTranslate();
        this.countValues = this.geographicEngs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  geographicUkr: GeographicUkr | undefined;

  getTranslate() {
    if(this.geographicEngs !== undefined) {
      this.selectedObject = this.geographicEngs.find((el: any) => {
        return el?.id == this.selectedValue;
      })

      if(this.selectedValue !== undefined) {
        this.dataService.getGeographicTranslate(this.selectedValue).subscribe((data: GeographicUkr) => {
          this.geographicUkr = data;
        });
      }

    }
  }

  getName() {
    return this.selectedObject !== undefined ? this.selectedObject.name : ""
  }

  getGeographicType() {
    return this.selectedObject !== undefined ? this.selectedObject.geographicType : ""
  }

  getTranslatedName() {
    return this.geographicUkr !== undefined ? this.geographicUkr.name : ""
  }

  getTranslatedGeographicType() {
    return this.geographicUkr !== undefined ? this.geographicUkr.geographicType : ""
  }

  getTranslatedGeographicGrammaticalGender() {
    return this.geographicUkr !== undefined ? this.geographicUkr.geographicGrammaticalGender : ""
  }

  getTranslatedId() {
    return this.geographicUkr !== undefined ? this.geographicUkr.id : ""
  }
}
