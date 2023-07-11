import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { News } from '../model/newsmodel';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private selectedCountry = 'us';
  private apiKey = 'ad50d9dc59db4806892744237d553cc9';
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  public getNews(): Observable<News> {
    return this.http.get<News>(`https://newsapi.org/v2/top-headlines?country=${this.selectedCountry}&apiKey=${this.apiKey}`)
  }

  public getSpecificNews(): Observable<News> {
    const newsId = this.route.snapshot.paramMap.get('id');
    return this.http.get<News>(`https://newsapi.org/v2/everything?id=${newsId}&apiKey=${this.apiKey}`);
  }
}