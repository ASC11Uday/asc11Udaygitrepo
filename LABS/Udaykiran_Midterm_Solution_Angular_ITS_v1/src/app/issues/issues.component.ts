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
  issues: Issue[] = []; // Store the list of issues
  searchQuery: string = ''; // For the search bar

  constructor(private issueService: IssueService, private router: Router) {}

  ngOnInit(): void {
    this.getIssues(); // Load all issues when the component is initialized
  }

  // Fetch all issues
  getIssues(): void {
    this.issueService.getIssues().subscribe((issues) => {
      this.issues = issues;
    });
  }

  // View details of an issue (redirect to details page)
  viewDetails(issue: Issue): void {
    this.router.navigate(['/issue-details', issue.id]);
  }

  // Update an issue
  updateIssue(issue: Issue): void {
    this.router.navigate(['/update-issue', issue.id]);
  }

  // Delete an issue
  deleteIssue(issueId: number): void {
    if (confirm('Are you sure you want to delete this issue?')) {
      this.issueService.deleteIssue(issueId).subscribe(() => {
        this.getIssues(); // Refresh the list after deletion
      });
    }
  }

  // Filter issues based on search query
  onSearch(): void {
    if (this.searchQuery.trim() === '') {
      this.getIssues(); // If the search query is empty, fetch all issues
    } else {
      this.issueService.searchIssues(this.searchQuery).subscribe((filteredIssues) => {
        this.issues = filteredIssues;
      });
    }
  }
}

