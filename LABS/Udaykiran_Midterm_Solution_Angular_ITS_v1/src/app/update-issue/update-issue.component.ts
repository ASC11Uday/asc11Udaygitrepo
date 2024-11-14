import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../model/isuue.model';

@Component({
  selector: 'app-update-issue',
  templateUrl: './update-issue.component.html',
  styleUrls: ['./update-issue.component.css']
})
export class UpdateIssueComponent implements OnInit {
  issue: Issue | undefined;  // Declare issue as possibly undefined

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const issueId = +this.route.snapshot.paramMap.get('id')!;  // Get issue ID from route
    this.issueService.getIssueDetails(issueId).subscribe((issue) => {
      this.issue = issue;  // Set the issue data when fetched
    });
  }

  onSubmit(): void {
    if (this.issue) {
      this.issueService.updateIssue(this.issue).subscribe(() => {
        // Redirect to the issue list page after updating
        this.router.navigate(['/issues']);
      });
    }
  }
  
}
