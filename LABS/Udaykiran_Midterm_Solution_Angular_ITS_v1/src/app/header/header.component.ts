import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  goToProjectManager(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/issues']);
    } else {
      alert('You need to log in to access the Project Manager.');
      this.router.navigate(['/login']); 
    }
  }

  logout(): void {
    sessionStorage.removeItem('loggedInUser');
    alert("you're logged out");
    this.router.navigate(['/']);
  }

  goToAddIssue(): void {
    this.router.navigate(['/add-issue']);  
  }
}
