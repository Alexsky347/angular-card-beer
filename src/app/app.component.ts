import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { HeaderComponent } from './shared/ui/header/header.component';
import { PaginationComponent } from './shared/ui/pagination/pagination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, PaginationComponent],
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
    this.isHidden = true;

    // const windowHeight = window.innerHeight;
    // const lastScrollTop = windowHeight;
    // const scrollTopPosition = document.documentElement.scrollTop;

    // if (scrollTopPosition > lastScrollTop) {
    //   console.log('scrolling down');
    // } else if (scrollTopPosition < lastScrollTop) {
    //   console.log('scrolling up');
    // }
  }
}
