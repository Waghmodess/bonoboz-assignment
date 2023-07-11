import { Component } from '@angular/core';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {
  public newsItem: any;

  constructor(private service: NewsService) { }

  public ngOnInit(): void {
    this.service.getSpecificNews().subscribe((res) => {
      this.newsItem = res;
    }, err => {
      console.log(err);
    });
  }
}
