import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Datos } from "../interfaces/interfaces";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-datospersonales",
  templateUrl: "./datospersonales.component.html",
  styleUrls: ["./datospersonales.component.css"],
})
export class DatospersonalesComponent implements OnInit {
  @Input()
  data!: Datos;

  constructor() {}
  submit() {}
  ngOnInit(): void {}
}
