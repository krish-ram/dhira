import { Component, OnInit, OnDestroy } from "@angular/core";
import { country_list } from "../constants/app.constants";
import { AppService } from "../services/app.service";
import { Subscription } from "rxjs";
import { DataService } from "../services/data.service";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  userData;
  constructor(
    private appServc: AppService,
    private dataSrvc: DataService,
    private store: Store<any>
  ) {
    this.store.select("app").subscribe(response => {
      console.log(response);
    });

    this.store.select("login").subscribe(loginRes => {
      this.userData = loginRes.userDetails;
    });
  }
  countries = [];
  today = new Date();
  name;
  email;
  phone;
  msg;
  subs: Subscription;
  data;
  search;

  ngOnInit() {
    this.countries = country_list;

    // this.appServc.getConfig().subscribe(response => {
    //   console.log(response);
    // });

    this.dataSrvc.searchTerm.subscribe(response => {
      console.log(response);
      this.search = response;
    });

    this.appServc.getStubData().subscribe(response => {
      this.data = response;
    });
  }

  submit() {
    let data = [];
    this.subs = this.appServc
      .postData(this.name, this.email, this.phone, this.msg)
      .subscribe((res: any) => {
        alert(res.response);
      });
  }

  ngOnDestroy() {
    // this.subs.unsubscribe();
  }
}
