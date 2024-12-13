import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { IssuesComponent } from './issues/issues.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { AddIssueComponent } from './add-issue/add-issue.component';

const routes: Routes = [
    { path: 'issues', component: IssuesComponent },
  { path: 'add-issue', component: AddIssueComponent, canActivate: [AuthGuard] },  
  { path: 'update-issue/:id', component: UpdateIssueComponent },
  { path: 'issue-details/:id', component: IssueDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
