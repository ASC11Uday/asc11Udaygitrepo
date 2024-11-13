import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component'; 
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },  
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent },  
  { path: 'list-users', component: ListUsersComponent },
  { path: 'add-user', component: AddUserComponent },
  // { path: 'update-user', component: UpdateUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
