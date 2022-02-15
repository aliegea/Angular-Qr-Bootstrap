import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QRCodeComponent } from "angular2-qrcode";

import { QrGeneratorComponent } from "./qr-generator/qr-generator.component";

const routes: Routes = [
  {
    path: "",
    component: QrGeneratorComponent,
    pathMatch: "full",
    data: {
      title: "Generador Qr gratis Inicio",
      description: "Genera to código QR gratos online",
      ogTitle: "generador de código Qr online y gratuito",
    },
  },

  {
    path: "qr-Generator",
    component: QrGeneratorComponent,
    data: {
      title: "generador QR online",
      description:
        "personaliza tu código QR, escoge color , tamaño y contenido",
      ogTitle: "diseña tu código Qr online y gratuito",
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
