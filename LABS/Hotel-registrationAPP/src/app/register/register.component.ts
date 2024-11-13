import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user.model'; // Make sure this import is correct

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService // Inject UserService
  ) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.updateForm.valid) {
      const newUser: User = this.updateForm.value;  // Ensure newUser matches User model
      console.log('Registering user:', newUser);
      this.userService.registerUser(newUser);  // Register locally
      this.router.navigate(['/login']);  // Navigate to login page
    } else {
      console.log('Form is invalid');
    }
  }
}
