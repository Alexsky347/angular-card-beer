import { Component, OnInit, inject } from '@angular/core';
import { BeersApiService } from '../../../core/services/beers-api.service';
import { BeerCollection } from '../../../core/models/interfaces/beer';
import { LayoutComponent } from '../../../shared/ui/layout/layout.component';
import { Observable, catchError, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../../../shared/ui/card/card.component';
import { InputSearchComponent } from '../../../shared/ui/input-search/input-search.component';
import { PaginationComponent } from '../../../shared/ui/pagination/pagination.component';

@Component({
  selector: 'app-beers-list',
  standalone: true,
  imports: [
    LayoutComponent,
    AsyncPipe,
    CardComponent,
    InputSearchComponent,
    PaginationComponent
  ],
  templateUrl: './beers-list.component.html',
  styles: ['#pagination { display: flex; justify-content: center;}']
})
export class BeersListComponent implements OnInit {
  private beersApiService = inject(BeersApiService);
  beers$: Observable<BeerCollection> | undefined = undefined;
  private food: string | undefined = undefined;
  isHidden = false;

  searchBeersByFood(food: string) {
    this.food = food;
    this.beers$ = this.beersApiService.findByFood(food).pipe(
      catchError((error) => {
        console.error('Error fetching beers', error);
        return [];
      })
    );
  }

  ngOnInit() {
    this.beers$ = this.beersApiService.findAll().pipe(
      catchError((error) => {
        console.error('Error fetching beers', error);
        return [];
      })
    );
  }

  /**
   *
   * @param food @example 'Cheesecake or steak'
   */
  handleSearchChange(food: string) {
    if (!food) {
      this.beers$ = this.beersApiService.findAll();
      return;
    }
    this.searchBeersByFood(food);
  }
}
