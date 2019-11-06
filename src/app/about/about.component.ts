import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  providers: [DataService]
})
export class AboutComponent implements OnInit {
  constructor(private dataSrvc: DataService) {}
  today = new Date();
  ngOnInit() {
    console.log(this.dataSrvc.getValue());
  }
}
