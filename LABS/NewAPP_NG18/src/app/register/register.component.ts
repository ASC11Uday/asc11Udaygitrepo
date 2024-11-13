import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private fromBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.registerForm = this.fromBuilder.group({
      adminName: ['adminName', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email:['a@a.com',[Validators.required,Validators.email]],
    });
  }
  // get f(){
  //   return this.registerForm
  // }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.log('form Sumitted  Successfully',this.registerForm.value)
  }
}
