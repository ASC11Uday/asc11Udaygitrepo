import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { RegistrationFormComponent } from './registration/registration-form.component';
import { RegistrationFormComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'details', component: DetailsComponent, canActivate: [authGuard] }
];