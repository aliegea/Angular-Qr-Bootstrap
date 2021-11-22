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
    colorPicker: "#000",
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

  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }
  qrColor(val: "foreground") {
    if (val == "foreground") {
      this.foreground = "#000";
    }
  }

  qrData(val: string) {
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

    // cliente.canvas = "";
    //to download last data introduced
    // let i: number;
    // for (i = 0; i < this.codes.length; i++) {
    //   if (i == this.codes.length - 1) {
    //     clienteStr = JSON.stringify(this.codes[i]);
    this.values = this.clienteStr;
    val = this.clienteStr;
    console.log(val);
    // }
    // }
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

  qrBackground(val: "WHITE" | "GREY" | "BLACK") {
    switch (val) {
      case "WHITE":
        this.background = "#FFFFFF";
        break;
      case "GREY":
        this.background = "#D3D3D3";
        break;
      case "BLACK":
        this.background = "#000";
        break;
    }
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
