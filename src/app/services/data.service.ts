import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  value;
  setValue(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
  destructure(arr) {
    return arr.filter(each => {
      return arr % 2 === 0;
    });
  }
}
