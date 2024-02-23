import { Component, Input, OnInit } from '@angular/core';
import { BeerCollection } from '../../../core/models/interfaces/beer';
import { GetBeerPropertyPipe } from '../../pipe/get-beer-property.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GetBeerPropertyPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  @Input() items!: BeerCollection;

  headers!: Array<string>;

  ngOnInit() {
    if (this.items && this.items.length > 0) {
      this.headers = Object.keys(this.items[0]);
    }
  }
}
