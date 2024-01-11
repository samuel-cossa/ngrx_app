import { Component, DoCheck, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemesComponent } from '../themes/themes.component';
import { NavbarShowHideEnum } from '../navbar-show-hide.enum';

@Component({
  selector: 'app-auth-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ThemesComponent
  ],
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.scss']
})
export class AuthNavbarComponent implements DoCheck {
  header_var = false;

  public show: string = 'hide';
  public icon: string = 'bi-list';

  public toggle_menu() {
    this.show === NavbarShowHideEnum.HIDE ? this.show = NavbarShowHideEnum.SHOW : this.show = NavbarShowHideEnum.HIDE;
    this.icon === NavbarShowHideEnum.BI_LIST ? this.icon = NavbarShowHideEnum.BI_X : this.icon = NavbarShowHideEnum.BI_LIST;
  }

  @HostListener("document:scroll")
  scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.header_var = true;
    } else {
      this.header_var = false;
    }
  }

  router_name: string = '';
  router_path: string = '';
  constructor(private route: Router) { }

  ngDoCheck(): void {
    const currentRoute = this.route.url;
    if (currentRoute === '/login') {
      this.router_name = 'register';
      this.router_path = '/login/register';
    } else if (currentRoute === '/login/register') {
      this.router_name = 'login';
      this.router_path = '/login';
    }
  }
}
