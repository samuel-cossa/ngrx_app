import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/layout/navbar/navbar.component';
import { AuthNavbarComponent } from './shared/components/layout/auth-navbar/auth-navbar.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { BackTopComponent } from './shared/components/layout/back-top/back-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    AuthNavbarComponent,
    FooterComponent,
    BackTopComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoggedIn: boolean = false;
  route = inject(Router);

  ngDoCheck(): void {
    const currentRoute = this.route.url;
    if (currentRoute === '/login' || currentRoute === '/login/register') {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
  }
}
