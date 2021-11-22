import { Component, OnInit } from "@angular/core";
import { Meta, MetaDefinition } from "@angular/platform-browser";
import { Datos } from "../interfaces/interfaces";

@Component({
  selector: "app-qr-generator",
  templateUrl: "./qr-generator.component.html",
  styleUrls: ["./qr-generator.component.css"],
})
export class QrGeneratorComponent implements OnInit {
  ngOnInit() {
    this.qrColor("foreground");
    this.qrBackground("#ffffff");
  }
  codes: Datos[] = [];
  clienteStr: any;

  public values: string;
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  public background: string;
  public foreground: string;
  public canvas: boolean;
  public result: string = "";
  public newItem: string = ";";

  public data: Datos = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    web: "",
    canvas: true,
  };
  public colorPickerDirective: any = {
    cpWidth: "230px",
    colorPicker: "#fff",
    cpToggle: true,
  };

  constructor() {
    this.level = "L";
    this.values = this.result;
    this.width = 250;
    this.background = "white";
    this.canvas = true;
    this.foreground = "foreground";
  }
  addUrl(newItem: string) {
    this.newItem = newItem;
  }

  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }
  qrColor(val: "foreground") {
    if (val == "foreground") {
      this.foreground = "#000";
    }
  }

  qrData(val: string) {
    if (this.newItem !== "") {
      this.values = this.newItem;
      val = this.newItem;
      console.log(val);
    } else {
      let cliente = this.data;
      this.clienteStr =
        "MECARD:N:" +
        this.data.surname +
        "," +
        this.data.name +
        ";TEL:" +
        this.data.phone +
        ";" +
        "EMAIL:" +
        this.data.email +
        ";" +
        "URL:" +
        this.data.web +
        ";;";
      val = this.result;
      this.codes.push({
        name: cliente.name,
        surname: cliente.surname,
        email: cliente.email,
        phone: cliente.phone,
        web: cliente.web,
        canvas: cliente.canvas,
      });

      this.values = this.clienteStr;
      val = this.clienteStr;
      console.log(val);
    }
    this.downloadButton();
    console.log(val);
    console.log(this.codes);
  }
  newQr() {
    this.data.name = "";
    this.data.surname = "";
    this.data.email = "";
    this.data.phone = "";
    this.data.web = "";
  }
  downloadQR(fileName: string): void {
    let canva = document.getElementsByTagName("canvas");

    let canvaImg = "image/png";

    let imgURL = canva[0].toDataURL(canvaImg);

    let dlLink = document.createElement("a");
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [canvaImg, dlLink.download, dlLink.href].join(
      ":"
    );

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
    this.downloadButtonOff();
  }

  qrWidth(val: number) {
    this.width = val;
  }

  qrBackground(val: string) {
    this.background = val;
  }
  downloadButton() {
    let btn = document.getElementById("downloadBtn") as HTMLButtonElement;
    btn.classList.remove("d-none");
  }
  downloadButtonOff() {
    let btn = document.getElementById("downloadBtn") as HTMLButtonElement;
    btn.classList.add("d-none");
  }
}
