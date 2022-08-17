import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {GeographicUkr} from "../../GeographicUkr";
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
        this.countValues = this.geographicUkrs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  setSelectedObject() {
    if(this.geographicUkrs !== undefined) {
      this.selectedObject = this.geographicUkrs.find((el: any) => {
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
