import { Component, Input, TemplateRef } from '@angular/core';
import { BeerCollection } from '../../../core/models/interfaces/beer';
import { NgTemplateOutlet } from '@angular/common';
import { input } from '@angular/core';

@Component({
  selector: 'app-item-view',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './item-view.component.html',
  styleUrl: './item-view.component.scss'
})
export class ItemViewComponent {
  items = input.required<BeerCollection | null>();
  itemTemplate = input.required<TemplateRef<HTMLElement>>();

  generateContext(): any {
    return {
      $implicit: this.items()
    };
  }
}
