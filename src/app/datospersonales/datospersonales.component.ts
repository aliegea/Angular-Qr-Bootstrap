import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Datos } from "../interfaces/interfaces";
import * as htmlToImage from "html-to-image";

@Component({
  selector: "app-datospersonales",
  templateUrl: "./datospersonales.component.html",
  styleUrls: ["./datospersonales.component.css"],
})
export class DatospersonalesComponent implements OnInit {
  @Input()
  data!: Datos;

  constructor() {}
  ngOnInit(): void {}
  generateImage() {
    var node: any = document.getElementById("imgDatos");
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }
}
