import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../model/isuue.model';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {
  issue: Issue | undefined;  // Issue details to display

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService
  ) {}

  ngOnInit(): void {
    const issueId = +this.route.snapshot.paramMap.get('id')!;  // Get ID from route
    this.issueService.getIssueDetails(issueId).subscribe((data: Issue | undefined) => {
      this.issue = data;  // Set the issue data to display
    });
  }
}
