import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserNG18';

  constructor(private router: Router) {}

  logout() {
    sessionStorage.removeItem('loggedIn');
    alert("You're logged out");
    this.router.navigate(['/']);
  }
}