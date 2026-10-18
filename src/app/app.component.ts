import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  showScrollTop = false;
  menuOpen = false;
  currentYear = new Date().getFullYear();

  isScrolled = false;

  private readonly routerSubscription: Subscription;

  constructor(private readonly router: Router) {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeNavbar();

        window.scrollTo({
          top: 0,
          behavior: 'auto'
        });

        this.isScrolled = false;
        this.showScrollTop = false;
      });
  }

  toggleNavbar(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeNavbar(): void {
    this.menuOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const scrollTop =
      window.scrollY || document.documentElement.scrollTop;

    this.isScrolled = scrollTop > 50;
    this.showScrollTop = scrollTop > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
