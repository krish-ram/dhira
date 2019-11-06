import { Component, OnInit, OnDestroy } from "@angular/core";
import { country_list } from "../constants/app.constants";
import { AppService } from "../services/app.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private appServc: AppService) {}
  countries = [];
  today = new Date();
  name;
  email;
  phone;
  msg;
  subs: Subscription;

  ngOnInit() {
    this.countries = country_list;

    // this.appServc.getConfig().subscribe(response => {
    //   console.log(response);
    // });

    this.appServc.getStubData().subscribe(response => {
      console.log(response);
    });
  }

  submit() {
    this.subs = this.appServc
      .postData(this.name, this.email, this.phone, this.msg)
      .subscribe((res: any) => {
        alert(res.response);
      });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
