import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './inews';
import { Observable } from 'rxjs';
import {switchMap, map} from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3/pipe';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    const x: News[] = [];
    return this.http
    .get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=743fa2ad869943749cb7ffa8d4781036')
    .pipe(map(c => c['articles'] ));
  }
}
