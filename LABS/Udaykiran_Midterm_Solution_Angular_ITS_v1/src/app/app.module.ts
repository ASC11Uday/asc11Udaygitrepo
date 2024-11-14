// import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { IssuesComponent } from './issues/issues.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { AddIssueComponent } from './add-issue/add-issue.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    IssuesComponent,IssueDetailsComponent,UpdateIssueComponent,AddIssueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,CommonModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
