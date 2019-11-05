import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products.component";
import { RouterModule } from "@angular/router";
import { products_routes } from "./products.routing.module";
import { TodayComponent } from "./today/today.component";

@NgModule({
  declarations: [ProductsComponent, TodayComponent],
  imports: [CommonModule, RouterModule.forChild(products_routes)]
})
export class ProductsModule {}
