import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
// import { User } from '../models/user.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationFormComponent {
  userData: Partial<User> = {
    name: '',
    phone: '',
    location: '',
    languages: [],
    bloodGroup: '',
    dateOfBirth: ''
  };

  constructor(private router: Router) {}

  toggleLanguage(language: string) {
    if (!this.userData.languages) {
      this.userData.languages = [];
    }
    const index = this.userData.languages.indexOf(language);
    if (index === -1) {
      this.userData.languages.push(language);
    } else {
      this.userData.languages.splice(index, 1);
    }
  }

  getAllUserProfiles(): any[] {
    const profiles = localStorage.getItem('allUserProfiles');
    return profiles ? JSON.parse(profiles) : [];
  }

  saveUserProfile(profile: any) {
    const profiles = this.getAllUserProfiles();
    profiles.push(profile);
    localStorage.setItem('allUserProfiles', JSON.stringify(profiles));
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const email = localStorage.getItem('userEmail') || '';
    const password = localStorage.getItem('userPassword') || '';
    
    const completeUserData = {
      ...this.userData,
      email,
      password,
      registrationComplete: true
    };

    localStorage.setItem('userProfile', JSON.stringify(completeUserData));
    localStorage.setItem('registrationComplete', 'true');
    this.saveUserProfile(completeUserData);

    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');

    this.router.navigate(['/home']);
  }
}