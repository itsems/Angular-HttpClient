import { Component, OnInit } from "@angular/core";

// import Service
import { ApiService } from "../api.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {
  // Define articles or user
  // articles;

  users;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // call getNews() func
    this.apiService.getNews().subscribe(data => {
      console.log(data);
      // this.articles = data["articles"];
      this.users = data["results"];
    });
  }
}
