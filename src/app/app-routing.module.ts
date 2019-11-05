import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ContentComponent } from "./content/content.component";

export const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: "index", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "Contact", component: ContactComponent },
  { path: "content", component: ContentComponent },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.module").then(mod => mod.ProductsModule)
  },
  {
    path: "orders",
    loadChildren: () =>
      import("./orders/orders.module").then(mod => mod.OrdersModule)
  },
  { path: "**", component: HomeComponent }
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
