import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {NameEng} from "../../NameEng";
@Component({
  selector : 'app-names-english',
  templateUrl : './names-english.component.html'
})
export class NamesEnglishComponent {

  nameEngs: NameEng[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allEnglishNames().subscribe((data: NameEng[]) => {
      this.nameEngs = data;

      if(this.nameEngs !== undefined) {
        this.selectedValue = this.nameEngs[0].id;
        this.setSelectedObject();
        this.countValues = this.nameEngs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  setSelectedObject() {
    if(this.nameEngs !== undefined) {
      this.selectedObject = this.nameEngs.find((el: any) => {
        return el?.id == this.selectedValue;
      })
    }
  }

  getName() {
    return this.selectedObject !== undefined ? this.selectedObject.name : ""
  }

  getGenderName() {
    return this.selectedObject !== undefined ? this.selectedObject.genderName : ""
  }

}
