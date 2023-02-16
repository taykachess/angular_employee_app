import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  activeLink: string;

  constructor(private router: Router) {
    // Решает проблему: Остаться на той же странице при full reload
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.activeLink = e.url;
      }
    });
  }

  links: { title: string; route: string }[] = [
    { title: 'Страница 1', route: '/' },
    { title: 'Страница 2', route: '/getAll' },
  ];
}
