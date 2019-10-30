import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  AfterViewInit,
  OnChanges,
  ChangeDetectionStrategy
} from "@angular/core";

import { AppService } from "../services/app.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
  // changeDetection: [ChangeDetectionStrategy.OnPush]
})
export class ContentComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() header;
  countryList = [];
  selectedCountry;

  constructor(private appService: AppService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log("Init called");
    this.countryList = [
      { label: "Audi", value: "Audi" },
      { label: "BMW", value: "BMW" },
      { label: "Fiat", value: "Fiat" },
      { label: "Ford", value: "Ford" },
      { label: "Honda", value: "Honda" },
      { label: "Jaguar", value: "Jaguar" },
      { label: "Mercedes", value: "Mercedes" },
      { label: "Renault", value: "Renault" },
      { label: "VW", value: "VW" },
      { label: "Volvo", value: "Volvo" }
    ];
    //this.appService.getCountryList();
    console.log(this.countryList);
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");
  }

  setCountrySelected(country) {
    console.log(country);

    this.selectedCountry = country;
  }
}
