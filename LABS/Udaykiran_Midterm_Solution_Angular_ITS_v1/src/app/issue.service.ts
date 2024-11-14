import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Issue } from './model/isuue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiUrl = 'http://localhost:3000/issues';

  constructor(private http: HttpClient) {}

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.apiUrl);
  }

  addIssue(issue: Issue): Observable<Issue> {
    if (!issue.date) {
      issue.date = new Date().toISOString().split('T')[0];
    }
    return this.http.post<Issue>(this.apiUrl, issue);
  }

  searchIssues(query: string): Observable<Issue[]> {
    return this.http.get<Issue[]>(`${this.apiUrl}?q=${query}`);
  }

  getIssueDetails(id: number): Observable<Issue> {
    return this.http.get<Issue>(`${this.apiUrl}/${id}`);
  }

  updateIssue(updatedIssue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`${this.apiUrl}/${updatedIssue.id}`, updatedIssue);
  }

  deleteIssue(issueId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${issueId}`);
  }
}
