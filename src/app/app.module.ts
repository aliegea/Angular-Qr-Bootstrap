import { NgModule } from "@angular/core";
import { BrowserModule, Meta } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";

import { ContactComponent } from "./contact/contact.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QRCodeModule } from "angular2-qrcode";
import { ColorPickerModule } from "ngx-color-picker";
import { DatospersonalesComponent } from "./datospersonales/datospersonales.component";
import { QrGeneratorComponent } from "./qr-generator/qr-generator.component";
import { TiposQrComponent } from "./tipos-qr/tipos-qr.component";
import { PreguntasFrequentesComponent } from "./preguntas-frequentes/preguntas-frequentes.component";
import { AboutComponent } from "./about/about.component";
import { UrlComponent } from "./qr-generator/url/url.component";
import { DatosComponent } from './qr-generator/datos/datos.component';
import { TextoComponent } from './qr-generator/texto/texto.component';
import { CardComponent } from './qr-generator/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DatospersonalesComponent,
    QrGeneratorComponent,
    TiposQrComponent,
    PreguntasFrequentesComponent,
    UrlComponent,
    DatosComponent,
    TextoComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    QRCodeModule,
    ColorPickerModule,
    HttpClientModule,
  ],
  providers: [Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
