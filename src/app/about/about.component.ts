import { Component, OnInit } from "@angular/core";
import { TestimonialsService } from "../services/testimonials.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  commentsList: any = [];
  constructor(private TestimonialsService: TestimonialsService) {
    console.log("componente creado");
  }

  ngOnInit(): void {
    console.log("componente iniciado");
    this.TestimonialsService.getComments().subscribe(
      (response: any) => (this.commentsList = response)
    );
  }
}
