import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer, BeerCollection } from '../../models/interfaces/beer';
import { BACKEND_URL } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class BeersApiService {
  httpClient = inject(HttpClient);

  constructor(@Inject(BACKEND_URL) private _url: string) {}

  findAll(page = 1, perPage = 50): Observable<BeerCollection> {
    return this.httpClient.get<BeerCollection>(this._url, {
      params: {
        page: page.toString(),
        per_page: perPage.toString()
      }
    });
  }

  findById(id: number): Observable<Beer> {
    return this.httpClient.get<Beer>(this._url, {
      params: {
        id: id.toString()
      }
    });
  }

  findByFood(food: string): Observable<BeerCollection> {
    return this.httpClient.get<BeerCollection>(this._url, {
      params: {
        food: food
      }
    });
  }
}
