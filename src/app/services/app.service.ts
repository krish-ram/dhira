import { Injectable } from "@angular/core";
import { country_list } from "../constants/app.constants";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AppService {
  configUrl = "https://jsonplaceholder.typicode.com/todos/1";

  stubUrl = "../../assets/stub.json";

  postUrl = "http://13.232.89.76:8000/api/v1/";

  constructor(private http: HttpClient) {}

  getCountryList = () => {
    return country_list;
  };

  getConfig() {
    return this.http.get(this.configUrl);
  }

  getStubData() {
    return this.http.get(this.stubUrl);
  }
  postData(name, email, phonenumber, msg) {
    return this.http.post(this.postUrl, {
      name: name,
      phonenumber: phonenumber,
      msg: msg,
      email: email
    });
  }
}
