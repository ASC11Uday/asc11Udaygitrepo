// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { NgModule } from "@angular/core";

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// import { NgModule } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";
// import { AppComponent } from "./app.component";
// import { AppRoutingModule } from "./app-routing.module";
// @NgModule ({
//   declarations: [AppComponent],
//   imports: [BrowserModule,AppRoutingModule],
//   providers: [],
//   bootstrap:[AppComponent]
// })
// export class AppModule{

// }

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
declarations:[LoginComponent,AppComponent],
imports : [BrowserModule,AppRoutingModule,ReactiveFormsModule],
providers:[],
bootstrap:[AppComponent],
})
export class AppModule{

}