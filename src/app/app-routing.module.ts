import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { QrGeneratorComponent } from "./qr-generator/qr-generator.component";
import { PreguntasFrequentesComponent } from "./preguntas-frequentes/preguntas-frequentes.component";
import { TiposQrComponent } from "./tipos-qr/tipos-qr.component";
import { DatospersonalesComponent } from "./datospersonales/datospersonales.component";
import { UrlComponent } from "./qr-generator/url/url.component";
import { CardComponent } from "./qr-generator/card/card.component";
import { TextoComponent } from "./qr-generator/texto/texto.component";

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
    path: "tiposQr",
    component: TiposQrComponent,
    data: {
      title: "Tipos de  Qr gratis ",
      description:
        "Qr para datos personales, qr para URL, Qr para menú rwstaurante",
      ogTitle: "tipos  de código Qr. Qr online y gratuito",
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
    path: "preguntas-frecuentes",
    component: PreguntasFrequentesComponent,
    data: {
      title: "preguntas frecuentes",
      description: "para qué sirve un código QR, tipos de códigos ",
      ogTitle: "¿Qué es un código QR",
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
  {
    path: "about",
    component: AboutComponent,
    data: {
      title: "testimonios",
      description: "opiniones clientes generador QR ",
    },
  },
  {
    path: "datos",
    component: DatospersonalesComponent,
    data: {
      title: "QR datos personles",
      description: "generador QR para datos personales",
    },
  },
  {
    path: "card",
    component: CardComponent,
    data: {
      title: "QR bussiness card",
      description: "generador QR para bussiness card",
    },
  },
  {
    path: "url",
    component: UrlComponent,
    data: {
      title: "QR url",
      description: "generador QR para url",
    },
  },
  {
    path: "texto",
    component: TextoComponent,
    data: {
      title: "QR texto",
      description: "generador QR para textos",
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
