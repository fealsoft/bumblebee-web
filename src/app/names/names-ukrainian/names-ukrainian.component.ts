import { Component } from '@angular/core';
import {DataService} from "../../app.dataService";
import {NameUkr} from "../../NameUkr";
@Component({
  selector : 'app-names-ukrainian',
  templateUrl : './names-ukrainian.component.html'
})
export class NamesUkrainianComponent {

  nameUkrs: NameUkr[] | undefined;

  constructor(private dataService: DataService) {
    this.dataService.allUkrainianNames().subscribe((data: NameUkr[]) => {
      this.nameUkrs = data;
    });
  }

}
