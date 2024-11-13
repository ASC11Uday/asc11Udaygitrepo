import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.componet";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { HttpClientModule } from "@angular/common/http";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
// import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations : [AppComponent,LoginComponent,ListEmpComponent,UpdateEmpComponent,RegisterComponent],
    imports : [ BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,HttpClientModule,CommonModule],
    bootstrap : [AppComponent]

})
export class AppModule{

}