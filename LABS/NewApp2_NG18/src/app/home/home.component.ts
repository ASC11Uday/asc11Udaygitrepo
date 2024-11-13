import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { User } from '../models/user.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: User | null = null;

  ngOnInit() {
    const userProfile = localStorage.getItem('userProfile');
    if (userProfile) {
      this.userData = JSON.parse(userProfile);
    }
  }
}