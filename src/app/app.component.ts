import { Component } from "@angular/core";

@Component({
  selector: "app-sample-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "sampleApp";

  getValue(searchName) {
    console.log(searchName);
    this.title = searchName;
  }
}
