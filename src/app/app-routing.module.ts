import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

import { ContactComponent } from "./contact/contact.component";
import { QrGeneratorComponent } from "./qr-generator/qr-generator.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
    data: {
      title: "Generador Qr gratis Inicio",
      description: "Genera to código QR gratos online",
      ogTitle: "generador de código Qr online y gratuito",
    },
  },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Generador Qr gratis home",
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

  {
    path: "contact",
    component: ContactComponent,
    data: {
      title: "contacto",
      description: "formulario de contacto y dirección generador QR ",
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
