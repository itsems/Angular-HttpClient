import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Addding NewsComponent
import { NewsComponent } from "./news/news.component";

const routes: Routes = [
  {
    path: "news",
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
