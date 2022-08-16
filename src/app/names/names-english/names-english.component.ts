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
    });
  }

}
