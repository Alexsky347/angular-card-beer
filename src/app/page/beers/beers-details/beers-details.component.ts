import { Component } from '@angular/core';
import { LayoutComponent } from '../../../shared/ui/layout/layout.component';
import { Beer } from '../../../core/models/interfaces/beer';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../../../shared/ui/card/card.component';
import { Observable, map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-beers-details',
  standalone: true,
  imports: [LayoutComponent, CardComponent, AsyncPipe],
  templateUrl: './beers-details.component.html',
  styleUrl: './beers-details.component.scss'
})
export class BeersDetailsComponent {
  beerData$: Observable<Beer> = new Observable<Beer>();
  constructor(route: ActivatedRoute) {
    // const id = route.snapshot.paramMap.get('beerId')!;
    this.beerData$ = route.paramMap.pipe(
      map(() => window.history.state as Beer)
    );
  }
}
