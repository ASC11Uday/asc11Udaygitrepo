import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
// import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations : [AppComponent],
    imports : [BrowserModule],
    bootstrap :[AppComponent]
})
export class AppModule{

}