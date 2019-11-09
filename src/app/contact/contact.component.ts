import { Component, OnInit } from "@angular/core";
// import { format } from "path";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  count;
  foo;
  bar;
  constructor() {}

  ngOnInit() {
    // console.log(this.,)
  }

  //   submit() {
  //     this.name =  this.form.get('name');

  //     if(form.valid) {

  //     } else {
  //       this.msg = 'You email is incorrect';
  //     }
  //   }

  //   validateEMail (name) {
  // return na
  //   }
}
