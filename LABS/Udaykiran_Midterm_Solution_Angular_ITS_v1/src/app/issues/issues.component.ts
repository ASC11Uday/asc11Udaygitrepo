import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Router } from '@angular/router';
import { Issue } from '../model/isuue.model';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [];
  searchQuery: string = '';

  constructor(private issueService: IssueService, private router: Router) {}

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues(): void {
    this.issueService.getIssues().subscribe((issues) => {
      this.issues = issues;
    });
  }

  viewDetails(issue: Issue): void {
    this.router.navigate(['/issue-details', issue.id]);
  }

  updateIssue(issue: Issue): void {
    this.router.navigate(['/update-issue', issue.id]);
  }

  deleteIssue(issueId: number): void {
    if (confirm('Are you sure you want to delete this issue?')) {
      this.issueService.deleteIssue(issueId).subscribe(() => {
        this.getIssues();
      });
    }
  }

  onSearch(): void {
    if (this.searchQuery.trim() === '') {
      this.getIssues();
    } else {
      this.issueService.searchIssues(this.searchQuery).subscribe((filteredIssues) => {
        this.issues = filteredIssues;
      });
    }
  }
}
