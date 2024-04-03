import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  TemplateRef,
  ViewChild,
  HostListener
} from '@angular/core';
import { BeersApiService } from '../../../core/services/api/beers-api.service';
import {
  BeerCollection,
  DataFromApi
} from '../../../core/models/interfaces/beer';
import { LayoutComponent } from '../../../shared/ui/layout/layout.component';
import { Observable, catchError, filter, map, tap } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../../../shared/ui/card/card.component';
import { InputSearchComponent } from '../../../shared/ui/input-search/input-search.component';
import { PaginationComponent } from '../../../shared/ui/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { ItemViewComponent } from '../../../shared/ui/item-view/item-view.component';
import { ListComponent } from '../../../shared/ui/list/list.component';

@Component({
  selector: 'app-beers-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    LayoutComponent,
    AsyncPipe,
    CardComponent,
    InputSearchComponent,
    PaginationComponent,
    FormsModule,
    ItemViewComponent,
    ListComponent
  ],
  templateUrl: './beers-list.component.html',
  styles: ['#pagination { display: flex; justify-content: center;}']
})
export class BeersListComponent implements OnInit {
  private beersApiService = inject(BeersApiService);
  beers$!: Observable<BeerCollection>;
  isHidden = false;

  totalPages: Array<number> = [];
  nextPage = 0;
  prevPage = 0;
  mode = 'card';
  modeOptions = [{ mode: 'card' }, { mode: 'list' }];

  @ViewChild('cardTemplate') cardTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate!: TemplateRef<HTMLElement>;

  get template(): TemplateRef<HTMLElement> {
    if (this.mode === 'list') return this.listTemplate;
    return this.cardTemplate;
  }

  searchBeersByName(name: string): void {
    this.beers$ = this.beersApiService.findByName({ name }).pipe(
      catchError((error) => {
        console.error('Error fetching beers', error);
        return [];
      })
    );
  }

  private processBeerResponse(page?: number): void {
    this.beers$ = this.beersApiService.findAll(page).pipe(
      catchError((error) => {
        console.error('Error fetching beers', error);
        return [];
      }),
      filter((beers) => beers.data.length > 0),
      tap(({ pages, next, prev }) => {
        if (pages)
          this.totalPages = Array(pages)
            .fill(0)
            .map((x, i) => i);
        this.nextPage = next;
        this.prevPage = prev;
      }),
      map((beers) => beers.data)
    );
  }

  ngOnInit(): void {
    this.processBeerResponse();
  }

  /**
   *
   * @param food @example 'Cheesecake or steak'
   */
  handleSearchChange(food: string): void {
    if (!food) {
      this.beers$ = this.beersApiService.findAll().pipe(
        map((beers) => beers.data),
        catchError((error) => {
          console.error('Error fetching beers', error);
          return [];
        })
      );
      return;
    }
    this.searchBeersByName(food);
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll(event: Event): void {
    // console.log(event);
    // console.log(window.scrollY);
    // console.log(window.innerHeight);
    // console.log(self.innerHeight);
    // // will log the height of the frame viewport within the frameset
    // console.log(parent.innerHeight);
    // console.log(window.outerHeight);
    // will log the height of the viewport of the closest frameset
    // this.isHidden = true;
    //TODO to implements: scroll up appears, down disappears
  }

  handlePageChange(page: number): void {
    this.processBeerResponse(page);
  }
}
