import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {GeographicEng} from "../../GeographicEng";
@Component({
  selector : 'app-geographic-english',
  templateUrl : './geographic-english.component.html'
})
export class GeographicEnglishComponent {

  geographicEngs: GeographicEng[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allEnglishGeographic().subscribe((data: GeographicEng[]) => {
      this.geographicEngs = data;

      if(this.geographicEngs !== undefined) {
        this.countValues = this.geographicEngs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  setSelectedObject() {
    if(this.geographicEngs !== undefined) {
      this.selectedObject = this.geographicEngs.find((el: any) => {
        return el?.id == this.selectedValue;
      })
    }
  }

  getName() {
    return this.selectedObject !== undefined ? this.selectedObject.name : ""
  }

  getGeographicType() {
    return this.selectedObject !== undefined ? this.selectedObject.geographicType : ""
  }
}
