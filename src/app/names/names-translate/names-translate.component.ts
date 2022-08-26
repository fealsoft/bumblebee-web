import { Component } from '@angular/core';
import {GeographicEng} from "../../GeographicEng";
import {DataService} from "../../app.dataService";
import {GeographicUkr} from "../../GeographicUkr";
import {NameEng} from "../../NameEng";
import {NameUkr} from "../../NameUkr";
import {TranslateNameUkr} from "../../TranslateNameUkr";
@Component({
  selector : 'app-names-translate',
  templateUrl : './names-translate.component.html'
})
export class NamesTranslateComponent {

  nameEngs: NameEng[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allEnglishNames().subscribe((data: NameEng[]) => {
      this.nameEngs = data;

      if(this.nameEngs !== undefined) {
        this.selectedValue = this.nameEngs[0].id;
        this.getTranslate();
        this.countValues = this.nameEngs.length;
      }
    });
  }

  selectedValue: any | undefined;
  selectedObject: any | undefined;

  countValues: number = 0;

  translateNameUkrs: TranslateNameUkr[] | undefined;


  getTranslate() {
    if(this.nameEngs !== undefined) {
      this.selectedObject = this.nameEngs.find((el: any) => {
        return el?.id == this.selectedValue;
      })

      if(this.selectedValue !== undefined) {
        this.dataService.getNameTranslate(this.selectedValue).subscribe((data: TranslateNameUkr[]) => {
          this.translateNameUkrs = data;
        });
      }
    }
  }

  getName() {
    return this.selectedObject !== undefined ? this.selectedObject.name : ""
  }

  getGenderName() {
    return this.selectedObject !== undefined ? this.selectedObject.genderName : ""
  }

}
