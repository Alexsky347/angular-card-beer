import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { input } from '@angular/core';
import { output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('headerAnimation', [
      state(
        'false',
        style({
          position: 'static'
        })
      ),
      state(
        'true',
        style({
          position: 'fixed'
        })
      ),
      transition('static => hidden', animate('300ms ease-in')),
      transition('hidden => static', animate('300ms ease-out'))
    ])
  ]
})
export class HeaderComponent {
  isOpen = input.required<boolean>();
  isStatic = input.required<boolean>();
  toggleSidenav = output<boolean>();
}
