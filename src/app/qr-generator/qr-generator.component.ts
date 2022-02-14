import { Component, OnInit } from "@angular/core";
import { Meta, MetaDefinition } from "@angular/platform-browser";
import { Datos } from "../interfaces/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: "app-qr-generator",
  templateUrl: "./qr-generator.component.html",
  styleUrls: ["./qr-generator.component.css"],
})
export class QrGeneratorComponent implements OnInit {
  isUrl: boolean = false;
  isData: boolean = true;
  isTexto: boolean = false;
  public newItem: string = "";
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

  public data: Datos = {
    company: "",
    position: "",
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

  constructor(private route: Router) {
    this.level = "L";
    this.values = this.result;
    this.width = 250;
    this.background = "white";
    this.canvas = true;
    this.foreground = "foreground";
  }

  addData(newData: any) {
    console.log(newData);
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
    if (this.isUrl) {
      this.values = this.newItem;
      val = this.newItem;
      console.log(val);
      this.downloadButton();
    } else {
      let cliente = this.data;
      this.clienteStr =
        "MECARD:N:" +
        this.data.surname +
        "," +
        this.data.name +
        ";" +
        "NOTE:" +
        this.data.company +
        "-" +
        this.data.position +
        ";" +
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

      this.downloadButton();
      console.log(val);
      console.log(this.codes);
    }
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
  handleIsUrl() {
    this.isData = false;

    this.isUrl = true;
    console.log("Url is" + this.isUrl);
  }
  handleIsData() {
    this.isUrl = false;
    this.isData = true;
    console.log("data is " + this.isData);
  }
  addUrl(newItem: string): string {
    this.newItem = newItem;
    return newItem;
  }
}
