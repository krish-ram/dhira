import { Injectable } from "@angular/core";
import { country_list } from "../constants/app.constants";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor() {}

  getCountryList = () => {
    return country_list;
  };
}
