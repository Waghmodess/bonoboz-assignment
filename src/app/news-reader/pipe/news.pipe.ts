import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../model/newsmodel';

@Pipe({
  name: 'news'
})
export class NewsPipe implements PipeTransform {
  public transform(value: News[], searchNews: string): any {
    if (value.length === 0) {
      return value;
    }
    return value.filter(function (search: News) {
      return search.title.toLowerCase().indexOf(searchNews.toLowerCase()) > -1;
    });
  }
}
