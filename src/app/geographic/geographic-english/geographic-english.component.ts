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
    });
  }

}
