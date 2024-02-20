import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { HeaderComponent } from './shared/ui/header/header.component';
import { PaginationComponent } from './shared/ui/pagination/pagination.component';
import { SidenavComponent } from './shared/ui/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PaginationComponent,
    SidenavComponent
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

  @ViewChild('header') content!: ElementRef;

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll(event: Event) {
    console.log(event);
    // this.isHidden = true;
    //TODO to implements: scroll up appears, down disappears
  }
}
