import { Component, output } from '@angular/core';
import { input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  next = input.required<number>();
  prev = input.required<number>();
  pages = input.required<Array<number>>();

  pageChange = output<number>();
}
