import { Component, Input, OnInit } from '@angular/core';
import { Beer, BeerCollection } from '../../../core/models/interfaces/beer';
import { GetBeerPropertyPipe } from '../../pipe/get-beer-property.pipe';
import { NgOptimizedImage } from '@angular/common';
import { input } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [GetBeerPropertyPipe, NgOptimizedImage],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  items = input<BeerCollection>([]);

  headers!: Array<keyof Beer>;

  ngOnInit(): void {
    if (this.items()) {
      this.headers = Object.keys(this.items()[0]) as Array<keyof Beer>;
    }
  }
}
