import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable, filter, map, tap } from 'rxjs';
import {
  Beer,
  BeerCollection,
  DataFromApi
} from '../../models/interfaces/beer';
import { BACKEND_URL } from '../../../app.config';

@Injectable({
  providedIn: 'root'
})
export class BeersApiService {
  httpClient = inject(HttpClient);

  constructor(@Inject(BACKEND_URL) private _url: string) {}

  findAll(page = 1, perPage = 50): Observable<DataFromApi> {
    return this.httpClient.get<DataFromApi>(this._url, {
      params: {
        _page: page.toString(),
        _per_page: perPage.toString()
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

  findByName(name: { name: string }): Observable<BeerCollection> {
    // api doesn't handle ILIKE queries
    // return this.httpClient.get<DataFromApi>(this._url, {
    //   params: name
    // });

    return this.httpClient
      .get<BeerCollection>(this._url)
      .pipe(
        map((beers) =>
          beers.filter((beer) =>
            beer.name.toLowerCase().includes(name.name.toLowerCase())
          )
        )
      );
  }
}
