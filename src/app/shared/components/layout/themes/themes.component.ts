import { Component, Inject, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ThemeIconsEnum } from '../theme-icons.enum';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {
  public icon: string = ThemeIconsEnum.ICON_MOON;
  isDark: boolean = false;

  // constructor(@Inject(DOCUMENT) document: Document){}

  private document = inject(DOCUMENT)

  toggleMode() {
    const theme = this.document.body.classList.toggle('dark');
    this.isDark = theme;
    if (theme) {
      return this.icon = ThemeIconsEnum.ICON_SUN;
    }
    return (this.icon = ThemeIconsEnum.ICON_MOON);
  }

  ngOnInit(): void {
    const isDarkMode = this.document.body.classList.toString();
    if (isDarkMode === "dark") {
      this.icon = ThemeIconsEnum.ICON_SUN;
    }
  }
}
