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
    this.router.navigate(['/issues']);
  }

  logout(): void {
    sessionStorage.removeItem('logged out');
    alert("you're logged out");
    this.router.navigate(['/']);
  }

  goToAddIssue(): void {
    this.router.navigate(['/add-issue']);  
  }
}
