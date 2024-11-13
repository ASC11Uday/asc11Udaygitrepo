import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn() {
    return localStorage.getItem('registrationComplete') === 'true';
  }

  logout(event: Event) {
    event.preventDefault();
    localStorage.clear();
    window.location.href = '/login';
  }
}