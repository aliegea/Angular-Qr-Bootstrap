import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Meta, MetaDefinition } from "@angular/platform-browser";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  constructor() {}
  datos: string = "";
  ngOnInit(): void {}
  contactForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    subject: new FormControl("", Validators.required),
    message: new FormControl("", [
      Validators.required,
      Validators.maxLength(500),
    ]),
  });
  getContact() {
    this.datos = `Nombre=${this.contactForm.value.name}
    Email=${this.contactForm.value.email}
    Mail=${this.contactForm.value.subject}
    Mensaje=${this.contactForm.value.message}
    `;
    console.log(this.datos);
  }
  get validationMessage() {
    return this.contactForm.controls;
  }
}
