import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  SimpleChange,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() searchTerm: string;
  @Output() emitSearch = new EventEmitter();

  placeholder = "This is a placeholder";

  constructor() {}

  getName = function(name) {
    console.log(this.searchTerm);
    console.log(name);
    this.searchTerm = name;
  };

  alert = function() {
    this.emitSearch.emit(this.searchTerm);
  };
}
