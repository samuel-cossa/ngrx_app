import { Component, HostListener, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-back-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.scss']
})
export class BackTopComponent {

  // private document = Inject(DOCUMENT);

  // goTop() {
  //   this.document.getElementById("page-header")?.scrollIntoView({ behavior: "smooth" });
  //   this.document.documentElement.scrollTop = 0;
  // }

  // visible = false;

  // @HostListener("document:scroll")
  // scrollFunction() {
  //   if (
  //     this.document.body.scrollTop > 20 ||
  //     this.document.documentElement.scrollTop > 20
  //   ) {
  //     this.visible = true;
  //   } else {
  //     this.visible = false;
  //   }
  // }
  goTop() {
    document.getElementById("page-header")?.scrollIntoView({ behavior: "smooth" });
    document.documentElement.scrollTop = 0;
  }

  visible = false;

  @HostListener("document:scroll")
  scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}
