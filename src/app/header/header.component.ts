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
import { Router } from "@angular/router";
import { AppService } from "../services/app.service";
import { DataService } from "../services/data.service";
import { Store } from "@ngrx/store";
import { saveHeader } from "../state/action/app.action";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() searchTerm: string;
  @Output() emitSearch = new EventEmitter();
  @Output() pageName = new EventEmitter();
  @Output() dropdownVal = new EventEmitter();

  placeholder = "This is a placeholder";

  devices = ["sunday", "monday", "tuesday", "wednesday"];
  constructor(
    private router: Router,
    private appServc: AppService,
    private dataSrvc: DataService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.dropdownVal.emit(this.devices[1]);

    this.appServc.getConfig().subscribe(response => {
      console.log(response);
    });
  }
  // getName = function(name) {
  //   console.log(this.searchTerm);
  //   console.log(name);
  //   this.searchTerm = name;
  // };

  alert = function() {
    console.log(this.searchTerm);
    this.store.dispatch(saveHeader({ payload: { value: this.searchTerm } }));

    // this.dataSrvc.setValue(this.searchTerm);
    // this.emitSearch.emit(this.searchTerm);
  };

  onChange(dropdownEevent) {
    // console.log(dropdownEevent);
    this.router.navigate(["/products/today/" + dropdownEevent.target.value]);
    this.dropdownVal.emit(dropdownEevent.target.value);
  }
  pageChange(page) {
    this.router.navigate(["/" + page]);
    // this.pageName.emit(page);
  }
}
