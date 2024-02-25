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
import { BeerCollection } from '../../../core/models/interfaces/beer';
import { LayoutComponent } from '../../../shared/ui/layout/layout.component';
import { Observable, catchError } from 'rxjs';
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

  mode = 'card';
  modeOptions = [{ mode: 'card' }, { mode: 'list' }];

  @ViewChild('cardTemplate') cardTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('listTemplate') listTemplate!: TemplateRef<HTMLElement>;

  get template(): TemplateRef<HTMLElement> {
    if (this.mode === 'list') return this.listTemplate;
    return this.cardTemplate;
  }

  searchBeersByFood(food: string): void {
    this.beers$ = this.beersApiService.findByFood(food).pipe(
      catchError((error) => {
        console.error('Error fetching beers', error);
        return [];
      })
    );
  }

  ngOnInit(): void {
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
  handleSearchChange(food: string): void {
    if (!food) {
      this.beers$ = this.beersApiService.findAll();
      return;
    }
    this.searchBeersByFood(food);
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll(event: Event): void {
    console.log(event);
    console.log(window.scrollY);
    console.log(window.innerHeight);
    console.log(self.innerHeight);
    // will log the height of the frame viewport within the frameset

    console.log(parent.innerHeight);
    console.log(window.outerHeight);
    // will log the height of the viewport of the closest frameset

    // this.isHidden = true;
    //TODO to implements: scroll up appears, down disappears
  }
}
