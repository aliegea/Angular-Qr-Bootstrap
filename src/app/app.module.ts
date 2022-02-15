import { NgModule } from "@angular/core";
import { BrowserModule, Meta } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { QRCodeModule } from "angular2-qrcode";
import { ColorPickerModule } from "ngx-color-picker";
import { DatospersonalesComponent } from "./datospersonales/datospersonales.component";
import { QrGeneratorComponent } from "./qr-generator/qr-generator.component";
import { UrlComponent } from "./qr-generator/url/url.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DatospersonalesComponent,
    QrGeneratorComponent,
    UrlComponent,
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
