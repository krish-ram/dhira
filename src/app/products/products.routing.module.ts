import { ProductsComponent } from "./products.component";
import { TodayComponent } from "./today/today.component";

export const products_routes = [
  { path: "", component: ProductsComponent, pathMatch: "full" },
  { path: "today/:day", component: TodayComponent, pathMatch: "full" }
];
