import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';

// Hotel-related components
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelCreateComponent } from './components/hotels/Create-hotel/hotel-create.component';
import { HotelEditComponent } from './components/hotels/Update-hotel/hotel-edit.component';
import { HotelListComponent } from './components/hotels/View-hotel/hotel-list.component';

// Guest-related components
import { GuestsComponent } from './components/guests/guests.component';
import { GuestListComponent } from './components/guests/list-guests/guest-list.component';
import { CreateGuestComponent } from './components/guests/create-guests/create-guest.component';
import { UpdateGuestComponent } from './components/guests/update-guests/update-guest.component';

// Facility-related components
import { FacilitiesComponent } from './components/facilities/facilities.component';

// Booking-related components
import { BookingCreateComponent } from './components/bookings/Create-booking/booking-create.component';
import { BookingEditComponent } from './components/bookings/update-booking/booking-edit.component';
import { BookingListComponent } from './components/bookings/View-bookings/booking-list.component';

// Review-related components
// import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { PlansComponent } from './components/Plans/plans.component';

// Guards
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Default route
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Authentication and admin routes
  { path: 'login', component: LoginComponent },
  { path: 'register-admin', component: RegisterAdminComponent },

  // Dashboard route (protected)
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'plans', component: PlansComponent, canActivate:[AuthGuard] },

  // Record management routes
  // { path: 'create-record', component: CreateRecordComponent, canActivate: [AuthGuard] },
  // { path: 'view-records', component: ViewRecordsComponent, canActivate: [AuthGuard] },
  // { path: 'search-record', component: SearchRecordComponent, canActivate: [AuthGuard] },
  // { path: 'delete-record', component: DeleteRecordComponent, canActivate: [AuthGuard] },

  // Hotel management routes
  { path: 'hotels', component: HotelListComponent, canActivate: [AuthGuard] },
  { path: 'create-hotel', component: HotelCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit-hotel/:id', component: HotelEditComponent, canActivate: [AuthGuard] },

  // Guest management routes
  {
    path: 'guests',
    component: GuestsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: GuestListComponent } // Empty path means default child route
    ]
  },
  { path: 'guest-list', component: GuestListComponent, canActivate: [AuthGuard] },
  { path: 'create-guest', component: CreateGuestComponent, canActivate: [AuthGuard] },
  { path: 'edit-guest/:id', component: UpdateGuestComponent, canActivate: [AuthGuard] },

  // Facility management routes
  { path: 'facilities', component: FacilitiesComponent, canActivate: [AuthGuard] },

  // Booking management routes
  { path: 'bookings', component: BookingListComponent, canActivate: [AuthGuard] },
  { path: 'create-booking', component: BookingCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit-booking/:id', component: BookingEditComponent, canActivate: [AuthGuard] },

  // Review management routes
  { path: 'reviews', component: ReviewsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
