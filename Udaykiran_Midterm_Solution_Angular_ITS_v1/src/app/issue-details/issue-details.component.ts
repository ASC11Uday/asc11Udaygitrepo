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
  issue: Issue | undefined; 

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService
  ) {}

  ngOnInit(): void {
    const issueId = +this.route.snapshot.paramMap.get('id')!;
    this.issueService.getIssueDetails(issueId).subscribe((data: Issue | undefined) => {
      this.issue = data;  
    });
  }
}
