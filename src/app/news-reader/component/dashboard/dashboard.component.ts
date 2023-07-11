import { Component } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { News } from '../../model/newsmodel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public newsData: News[] = [];
  public searchQuery: string = '';

  constructor(private service: NewsService) { }

  public ngOnInit(): void {
    this.getNewsData();
  }

  private getNewsData(): void {
    this.service.getNews().subscribe((res: any) => {
      this.newsData = res.articles;
      console.log(this.newsData)
    }, err => {
      console.log(err);
    });
  }
}