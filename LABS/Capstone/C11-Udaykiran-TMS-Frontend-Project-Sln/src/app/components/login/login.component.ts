import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  attemptsLeft: number = 3;  
  isLocked: boolean = false; 

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Check if the account is locked
      if (this.isLocked) {
        this.errorMessage = 'Account locked for 30 minutes. Please try again later.';
        return;
      }

      this.authService.login(email, password).subscribe(
        (user) => {
          // Reset attempts on successful login
          this.attemptsLeft = 3;
          this.errorMessage = ''; // Clear error message
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          // Track attempts and lock the account if needed
          if (error.message === 'Invalid email or password') {
            this.attemptsLeft--;
            if (this.attemptsLeft === 0) {
              this.lockAccount();
              this.errorMessage = 'Account locked for 30 minutes. Please try again later.';
            } else {
              this.errorMessage = `Incorrect email or password. ${this.attemptsLeft} more attempt(s) left.`;
            }
          } else {
            this.errorMessage = error.message; // Other error handling
          }
        }
      );
    }
  }
  passwordFieldType: string = 'password';

togglePasswordVisibility(): void {
  this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
}


  // Lock account for 30 minutes
  private lockAccount(): void {
    this.isLocked = true;

    // Unlock the account after 30 minutes
    setTimeout(() => {
      this.isLocked = false;
      this.attemptsLeft = 3; 
      this.errorMessage = ''; 
    }, 30 * 60 * 1000); 
  }
}
