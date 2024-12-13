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
//   newIssue: Issue = {
//     id: 0,             
//     title: '',
//     description: '',
//     priority: 'Low',
//     status: 'Open',
//     assignee: '',
//     date: new Date().toISOString().split('T')[0] 
//   };

//   constructor(private issueService: IssueService, private router: Router) {}

//   onSubmit(): void {
//     this.issueService.addIssue(this.newIssue).subscribe((issue) => {
//       this.router.navigate(['/issues']);
//     });
//   }
// }
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
    id: 0,             
    title: '',
    description: '',
    priority: 'Low',
    status: 'Open',
    assignee: '',
    date: new Date().toISOString().split('T')[0] 
  };

  constructor(private issueService: IssueService, private router: Router) {}

  onSubmit(form: any): void {
    if (form.valid) {
      this.issueService.addIssue(this.newIssue).subscribe(() => {
        this.router.navigate(['/issues']);
      });
    }
  }
}
