import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { User } from '../models/user.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userData: User | null = null;

  ngOnInit() {
    const userProfile = localStorage.getItem('userProfile');
    if (userProfile) {
      this.userData = JSON.parse(userProfile);
    }
  }
}