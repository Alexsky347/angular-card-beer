import { Component, Input, TemplateRef } from '@angular/core';
import { BeerCollection } from '../../../core/models/interfaces/beer';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-item-view',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './item-view.component.html',
  styleUrl: './item-view.component.scss'
})
export class ItemViewComponent {
  @Input() items!: BeerCollection | null;
  @Input() itemTemplate!: TemplateRef<any>;
}
