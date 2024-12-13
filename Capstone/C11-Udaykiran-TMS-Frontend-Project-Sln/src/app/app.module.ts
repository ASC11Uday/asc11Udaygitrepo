import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Authentication and dashboard components
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Record management components
import { RegisterAdminComponent } from './components/register-admin/register-admin.component';

// Guest and facility components
import { GuestsComponent } from './components/guests/guests.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';

// Hotel-related components
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelCreateComponent } from './components/hotels/Create-hotel/hotel-create.component';
import { HotelEditComponent } from './components/hotels/Update-hotel/hotel-edit.component';
import { HotelListComponent } from './components/hotels/View-hotel/hotel-list.component';

// Booking-related components
import { BookingCreateComponent } from './components/bookings/Create-booking/booking-create.component';
import { BookingEditComponent } from './components/bookings/update-booking/booking-edit.component';
import { BookingListComponent } from './components/bookings/View-bookings/booking-list.component';

// Review components
import { ReviewsComponent } from './components/reviews/reviews.component';
import { GuestListComponent } from './components/guests/list-guests/guest-list.component';
import { CreateGuestComponent } from './components/guests/create-guests/create-guest.component';
import { UpdateGuestComponent } from './components/guests/update-guests/update-guest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterAdminComponent,
    GuestsComponent,
    GuestListComponent,
    CreateGuestComponent,
    UpdateGuestComponent,
    FacilitiesComponent, 
    HotelsComponent,
    HotelCreateComponent,
    HotelEditComponent,
    HotelListComponent,
    BookingCreateComponent,
    BookingEditComponent,
    BookingListComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
