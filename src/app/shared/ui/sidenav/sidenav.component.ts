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
  styles: '',
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
      transition('false <=> true', animate(250)),
      transition(
        'true => true',
        animate(
          250,
          keyframes([
            style({ transform: 'rotate(135deg)' }),
            style({ transform: 'rotate(180deg)' }),
            style({ transform: 'rotate(225deg)' }),
            style({ transform: 'rotate(270deg)' }),
            style({ transform: 'rotate(315deg)' }),
            style({ transform: 'rotate(360deg)' })
          ])
        )
      )
    ])
  ]
})
export class SidenavComponent {
  @Input({ required: true }) isOpen!: boolean;
  @Output() toggleCloseBtn = new EventEmitter<boolean>();
}
