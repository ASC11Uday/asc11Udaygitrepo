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
  issue: Issue | undefined;  

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const issueId = +this.route.snapshot.paramMap.get('id')!; 
    this.issueService.getIssueDetails(issueId).subscribe((issue) => {
      this.issue = issue;  
    });
  }

  onSubmit(): void {
    if (this.issue) {
      this.issueService.updateIssue(this.issue).subscribe(() => {
        this.router.navigate(['/issues']);
      });
    }
  }
  
}
