// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   updateForm!: FormGroup;  // Declare the form group property

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private userService: UserService
//   ) {}

//   ngOnInit(): void {
//     this.updateForm = this.fb.group({
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//     });
//   }

//   onSubmit() {
//     if (this.updateForm.valid) {
//       const newUser = this.updateForm.value;
//       console.log('User registered:', newUser); // Debug output
//       this.userService.registerUser(newUser);
  
//       // Navigate to the home page after registration
//       this.router.navigate(['/home']);
//     } else {
//       console.log('Form is not valid');
//     }
//   }
  
// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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
      password: ['', Validators.required],
    });
  }

  // onSubmit() {
  //   if (this.updateForm.valid) {
  //     const newUser = this.updateForm.value;

  //     // Check if the user is already registered
  //     if (this.userService.isUserRegistered(newUser.email)) {
  //       console.log('User already registered with this email');
  //     } else {
  //       // Register the user
  //       this.userService.registerUser(newUser);
  //       console.log('User registered:', newUser);

  //       // Redirect to home after successful registration
  //       this.router.navigate(['/home']);
  //     }
  //   } else {
  //     console.log('Form is not valid');
  //   }
  // }
  onSubmit() {
    if (this.updateForm.valid) {
      const newUser = this.updateForm.value;
      console.log('User registered:', newUser); 
      this.userService.registerUser(newUser);
      this.router.navigate(['/login']);
    } else {
      console.log('Form is not valid');
    }
  }
}
