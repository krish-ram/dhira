import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContentComponent } from "./content/content.component";
import { CommonModule } from "@angular/common";
import { DropdownModule } from "primeng/dropdown";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { RouterModule } from "@angular/router";
import { FilterPipe } from "./pipes/search.pipe";
import { SearchPipe } from "./search.pipe";
import { HttpClientModule } from "@angular/common/http";
import { DraggableDirective } from "./directives/drag.directive";
import { StoreModule } from "@ngrx/store";
import { reducers, effects } from "./state/main-state";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "src/environments/environment.prod";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FilterPipe,
    SearchPipe,
    DraggableDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule,
    RouterModule.forRoot(routes),
    DropdownModule,
    NoopAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(effects)
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
