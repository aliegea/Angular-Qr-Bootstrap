import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TestimonialsService {
  constructor(private http: HttpClient) {
    console.log("http inicializado");
  }

  getComments(): any {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
