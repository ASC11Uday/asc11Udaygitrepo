// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { IssueService } from '../issue.service';
// import { Issue } from '../model/isuue.model';

// @Component({
//   selector: 'app-add-issue',
//   templateUrl: './add-issue.component.html',
//   styleUrls: ['./add-issue.component.css']
// })
// export class AddIssueComponent {
//   newIssue: Issue = { id: 0, title: '', status: '', priority: '', assignee: '', description: '' };

//   constructor(private issueService: IssueService, private router: Router) {}

//   onSubmit(): void {
//     this.issueService.addIssue(this.newIssue).subscribe(() => {
//       this.router.navigate(['/issues']);  
//     });
//   }
// }
// src/app/add-issue/add-issue.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../model/isuue.model';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent {
  newIssue: Issue = {
    id: 0,              // ID will be assigned by the backend
    title: '',
    description: '',
    priority: 'Low',
    status: 'Open',
    assignee: '',
    date: new Date().toISOString().split('T')[0] // Default to current date
  };

  constructor(private issueService: IssueService, private router: Router) {}

  onSubmit(): void {
    this.issueService.addIssue(this.newIssue).subscribe((issue) => {
      this.router.navigate(['/issues']); // Navigate to issues page after adding
    });
  }
}

