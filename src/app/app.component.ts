import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { HeaderComponent } from './shared/ui/header/header.component';
import { PaginationComponent } from './shared/ui/pagination/pagination.component';
import { SidenavComponent } from './shared/ui/sidenav/sidenav.component';
import { NgTemplateOutlet } from '@angular/common';
import { LoadingComponent } from './shared/ui/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PaginationComponent,
    SidenavComponent,
    NgTemplateOutlet,
    LoadingComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isHidden = false;
  constructor(meta: Meta) {
    meta.addTag({ name: 'author', content: 'Ninja Squad' });
  }
  title = 'myAppAngular';
  isSideNavOpen = false;

  @ViewChild('header') content!: ElementRef;

  handleToggleSidenav(event: boolean) {
    console.log('handleToggleSidenav', event);
    console.log(this.isSideNavOpen);
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll(event: Event) {
    console.log(event);
    // this.isHidden = true;
    //TODO to implements: scroll up appears, down disappears
  }
}
