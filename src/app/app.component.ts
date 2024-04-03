import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { HeaderComponent } from './shared/ui/header/header.component';
import { PaginationComponent } from './shared/ui/pagination/pagination.component';
import { SidenavComponent } from './shared/ui/sidenav/sidenav.component';
import { NgTemplateOutlet } from '@angular/common';
import { LoadingComponent } from './shared/ui/loading/loading.component';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PaginationComponent,
    SidenavComponent,
    NgTemplateOutlet,
    LoadingComponent,
    LoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('marginLeftGrow', [
      state(
        'false',
        style({
          marginLeft: 0
        })
      ),
      state(
        'true',
        style({
          marginLeft: 250
        })
      ),
      transition('false <=> true', animate(250))
    ])
  ]
})
export class AppComponent {
  constructor(meta: Meta) {
    meta.addTag({ name: 'author', content: 'ALD' });
  }

  // sidenav
  title = 'myAppAngular';
  isSideNavOpen = false;

  //header
  isHeaderStatic = true;
  prevScrollPos = 0;

  handleToggleSidenav(event: boolean): void {
    this.isSideNavOpen = event;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos < this.prevScrollPos) {
      this.isHeaderStatic = true; // Show header
    } else {
      this.isHeaderStatic = false; // Hide header
    }
    this.prevScrollPos = currentScrollPos;
  }
}
