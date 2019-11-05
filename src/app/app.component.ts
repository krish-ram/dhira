import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-sample-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private router: Router) {}
  title = "sampleApp";
  search = "RAM";
  pageName = "Home";
  dropdownValue = 100;
  getValue(searchName) {
    console.log(searchName);
    this.title = searchName;
  }

  page(name) {
    this.pageName = name;
    console.log(this.pageName);
  }
}
