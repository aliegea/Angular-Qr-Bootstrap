import { Component, OnInit } from '@angular/core';
import { Datos } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    this.qrColor('foreground');
  }
  codes: Datos[] = [];

  public values: string;
  public level: 'L' | 'M' | 'Q' | 'H';
  public width: number;
  public background: string;
  public foreground: string;
  public canvas: boolean;

  public data: Datos = {
    name: 'Elena',
    surname: 'Polo',
    email: 'poloe@yahoo.com',
    phone: '654839202',
    web: '',
    canvas: true,
  };
  public colorPickerDirective: any = {
    cpWidth: '230px',
    colorPicker: '#000',
    cpToggle: true,
  };
  constructor() {
    this.level = 'L';
    this.values = JSON.stringify(this.data);
    this.width = 250;
    this.background = 'white';
    this.canvas = true;
    this.foreground = 'foreground';
  }

  qrLevel(val: 'L' | 'M' | 'Q' | 'H') {
    this.level = val;
  }
  qrColor(val: 'foreground') {
    if (val == 'foreground') {
      this.foreground = '#000';
    }
  }

  qrData(val: string) {
    let cliente = this.data;
    let clienteStr = JSON.stringify(this.data);
    this.codes.push({
      name: cliente.name,
      surname: cliente.surname,
      email: cliente.email,
      phone: cliente.phone,
      web: cliente.web,
      canvas: cliente.canvas,
    });
    cliente.name = '';
    cliente.surname = '';
    cliente.email = '';
    cliente.phone = '';
    cliente.web = '';
    cliente.canvas = '';
    //to download last data introduced
    let i: number;
    for (i = 0; i < this.codes.length; i++) {
      if (i == this.codes.length - 1) {
        clienteStr = JSON.stringify(this.codes[i]);
        this.values = clienteStr;
        val = clienteStr;
        console.log(val);
      }
    }

    console.log(this.codes);
  }

  downloadQR(fileName: string): void {
    this.qrData(this.values);
    let canva = document.getElementsByTagName('canvas');

    let canvaImg = 'image/png';

    let imgURL = canva[0].toDataURL(canvaImg);

    let dlLink = document.createElement('a');
    dlLink.download = fileName;
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [canvaImg, dlLink.download, dlLink.href].join(
      ':'
    );

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }

  qrWidth(val: number) {
    this.width = val;
  }

  qrBackground(val: 'WHITE' | 'GREY' | 'BLACK') {
    switch (val) {
      case 'WHITE':
        this.background = '#FFFFFF';
        break;
      case 'GREY':
        this.background = '#D3D3D3';
        break;
      case 'BLACK':
        this.background = '#000';
        break;
    }
  }
}
