import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {
  users: User[] = [];
  searchQuery: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem("loggedIn")) {
      this.router.navigate(["/login"]);
    } else {
      this.fetchUsers();
    }
  }

  private fetchUsers(): void {
    this.userService.getUsers().subscribe(
      (userData) => {
        this.users = userData;
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  deleteUser(toDeleteUser: User): void {
    if (toDeleteUser.id !== undefined) {
      this.userService.deleteUser(toDeleteUser.id).subscribe(() => {
        this.users = this.users.filter(user => user.id !== toDeleteUser.id);
      });
    }
  }

  updateUser(userId: number | undefined): void {
    if (userId !== undefined) {
      this.router.navigate(['update', userId]);
    } else {
      console.error("User ID is undefined");
    }
  }

  searchUsers() {
    if (!this.searchQuery) {
      this.fetchUsers();  // Fetch all users if search query is empty
    } else {
      this.users = this.users.filter(user => 
        user.name?.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        user.id?.toString().includes(this.searchQuery)
      );
    }
  }
}


