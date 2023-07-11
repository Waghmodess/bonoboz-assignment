import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './news-reader/component/dashboard/dashboard.component';
import { NewsReaderModule } from './news-reader/news-reader.module';
import { NewsPipe } from './news-reader/pipe/news.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, NewsReaderModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }