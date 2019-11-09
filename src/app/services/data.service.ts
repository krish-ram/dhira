import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor() {}

  searchTerm = new BehaviorSubject("");

  value;
  setValue(value) {
    this.value = value;
    this.searchTerm.next(value);
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
