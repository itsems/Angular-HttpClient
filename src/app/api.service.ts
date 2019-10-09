import { Injectable } from "@angular/core";

// import HttpClient
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  // API_KEY = "8e3a06d6192940f5b1cc6acaf25e0cdf";
  // Random_User = "https://randomuser.me/api/";
  Multi_Random_User = "https://randomuser.me/api/?results=5";

  public getNews() {
    // return this.httpClient.get(
    //   `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`
    // );
    // return this.httpClient.get(`${this.Random_User}`);
    return this.httpClient.get(`${this.Multi_Random_User}`);
  }
}
