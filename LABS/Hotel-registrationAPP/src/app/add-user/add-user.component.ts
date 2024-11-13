import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUserForm: FormGroup;
  states: string[] = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 
    'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry', 
    'Ladakh', 'Jammu and Kashmir'
  ];

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      location: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addUserForm.valid) {
      const newUser = this.addUserForm.value;
      this.userService.createUser(newUser).subscribe(
        () => {
          console.log('User added successfully');
          this.router.navigate(['/list-users']);  // Navigate to list-users page
        },
        (error) => {
          console.error('Error adding user', error);
        }
      );
    }
  }
  
}
