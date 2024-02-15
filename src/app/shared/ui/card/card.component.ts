import { Component, Input, inject } from '@angular/core';
import { Beer } from '../../../core/models/interfaces/beer';
import { EllipsisDirective } from '../../directive/ellipsis.directive';
import { TooltipDirective } from '../../directive/tooltip.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [EllipsisDirective, TooltipDirective],
  providers: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  router = inject(Router);
  @Input({ required: true }) beer!: Beer;

  toDetails() {
    this.router.navigateByUrl(`/beers/${this.beer.id}`, { state: this.beer });
  }
}
