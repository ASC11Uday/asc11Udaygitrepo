// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;

//   constructor(private formBuilder: FormBuilder, private router: Router,private userService: UserService
//   ) {
//     console.log('LoginComponent constructor called');
//   }

//   ngOnInit() {
//     console.log('LoginComponent ngOnInit called');
//     this.loginForm = this.formBuilder.group({
//       loginid: ['teddy', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     console.log(this.loginForm.value);
//     const loginid: string = this.loginForm.get("loginid")?.value;
//     const password: string = this.loginForm.get("password")?.value;

//     if (loginid === "teddy" && password === "pass") {
//       console.log("Login successful");
//       sessionStorage.setItem("loggedIn", "yes");
//       this.router.navigate(["/list-users"]); 
//     } else {
//       console.log("Login failed");
//     }
//   }

//   onRegister() {
//     this.router.navigate(['/register']); 
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService  // Inject UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      loginid: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const loginid: string = this.loginForm.get("loginid")?.value;
    const password: string = this.loginForm.get("password")?.value;
  
    if (this.userService.validateUser(loginid, password)) {
      console.log("Login successful");
      sessionStorage.setItem("loggedIn", "yes");
      this.router.navigate(["/home"]);  // Redirect to the home page after login
    } else {
      console.log("Login failed");
    }
  }
  

  onRegister() {
    this.router.navigate(['/register']);  // Navigate to register page
  }
}
