import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    // Attempt login using the provided username and password
    const success = this.authService.login(this.username, this.password);

    if (success) {
      console.log('Login successful');
      this.router.navigate(['/issues']);  // Redirect to the issues page upon successful login
    } else {
      console.log('Invalid credentials');
      this.loginError = true;  // Display the error message when login fails
    }
  }
}
