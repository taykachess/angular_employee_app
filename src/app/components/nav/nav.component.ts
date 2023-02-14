import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss', '../../app.component.scss'],
})
export class NavComponent {
  links: { title: string; route: string }[] = [
    { title: 'Страница 1', route: '/' },
    { title: 'Страница 2', route: '/getAll' },
  ];
  activeLink: string = this.links[0].route;
}
