import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(value: any, fallback: any): any {
    return value ? value : fallback;
    "";

    let image = "";
    if (value) {
      image = value;
    } else {
      image = fallback;
    }
    return image;
  }
}
