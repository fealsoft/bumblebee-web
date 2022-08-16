import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {GeographicEng} from "../../GeographicEng";
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
    });
  }

}
