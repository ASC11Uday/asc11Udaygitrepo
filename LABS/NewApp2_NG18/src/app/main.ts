import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './navbar/navbar.component';
// import { NavbarComponent } from './app/navbar/navbar.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { FooterComponent } from './footer/footer.component';
// import { FooterComponent } from './app/footer/footer.component';
import { FooterComponent } from './footer/footer.component';
// import { routes } from './app.routes';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="app-container">
      <app-navbar />
      <main class="container">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    main {
      flex: 1;
      padding: 20px 0;
    }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});