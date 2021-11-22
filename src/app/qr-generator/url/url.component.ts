import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-url",
  templateUrl: "./url.component.html",
  styleUrls: ["./url.component.css"],
})
export class UrlComponent implements OnInit {
  @Output() newUrlEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  addNewUrl(value: string) {
    this.newUrlEvent.emit(value);
  }
}
