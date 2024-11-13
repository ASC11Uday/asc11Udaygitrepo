import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Route, Router } from "@angular/router";

@Component({
    selector : "app-login",
    templateUrl : "./login.component.html",
    styleUrls : ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    loginform :FormGroup;
    constructor(private formBuilder:FormBuilder,private router:Router) {
        console.log("Login Constructor called");
    }
    ngOnInit() {
        this.loginform = this.formBuilder.group({
            loginid : ["Superman"],
            password : []
        });
    }
    onSubmit(){
        console.log(this.loginform.value);
        const loginid : string  = this.loginform.get("loginid").value;
        const password : string = this.loginform.get("password").value;


        if(loginid === "Superman" && password ==="pass"){
            console.log("login Successful");
            sessionStorage.setItem("loggedIn","yes");
            this.router.navigate(["/employees"]);
        }
        else {
            console.log("login fail");
        }

    }
}