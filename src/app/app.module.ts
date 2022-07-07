import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from "primeng/button";
import {SidebarModule} from "./components/sidebar/sidebar.module";
import {HttpClientModule} from "@angular/common/http";
import {TimetableModule} from "./pages/timetable/timetable.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ButtonModule,
    SidebarModule,
    TimetableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
