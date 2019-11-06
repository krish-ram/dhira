import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-sample-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DataService]
})
export class AppComponent {
  constructor(private router: Router, private dataSrvc: DataService) {}
  title = "sampleApp";
  search = "RAM";
  pageName = "Home";
  dropdownValue = 100;

  ngOnInit() {
    this.dataSrvc.setValue(122);
    console.log(this.dataSrvc.getValue());
  }

  getValue(searchName) {
    console.log(searchName);
    this.title = searchName;
  }

  page(name) {
    console.log(this.dataSrvc.destructure([1, 2, 3, 4]));
    this.pageName = name;
    console.log(this.pageName);
  }
}
