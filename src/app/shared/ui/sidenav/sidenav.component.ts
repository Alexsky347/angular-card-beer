import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule, NgStyle],
  templateUrl: './sidenav.component.html',
  styles: `
    .sidenav-burger {
      transition: transform 1.5s ease-in-out;
    }

    .sidenav-burger[isOpen='false'] {
      transform: rotate(0deg);
    }

    .sidenav-burger[isOpen='true'] {
      transform: rotate(90deg);
    }
  `,
  animations: [
    trigger('widthGrow', [
      state(
        'false',
        style({
          width: 0
        })
      ),
      state(
        'true',
        style({
          width: 250
        })
      ),
      transition('false <=> true', animate(500))
    ]),
    trigger('closeBtn', [
      state(
        'false',
        style({
          transform: 'rotate(0deg)'
        })
      ),
      state(
        'true',
        style({
          transform: 'rotate(90deg)'
        })
      ),
      transition('false <=> true', animate('1500ms ease-in-out'))
    ])
  ]
})
export class SidenavComponent {
  @Input({ required: true }) isOpen!: boolean;
  @Output() toggleCloseBtn = new EventEmitter<boolean>();
}
