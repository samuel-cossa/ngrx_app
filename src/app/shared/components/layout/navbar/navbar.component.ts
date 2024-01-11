import { Component, HostListener } from '@angular/core';
import { NavbarShowHideEnum } from '../navbar-show-hide.enum';
import { ThemesComponent } from '../themes/themes.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ThemesComponent,
    RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  header_var = false;
  toggleMenu: boolean = true;
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

}
