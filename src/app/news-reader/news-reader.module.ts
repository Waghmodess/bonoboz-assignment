import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsDetailsComponent } from './component/news-details/news-details.component';

@NgModule({
  declarations: [
    NewsDetailsComponent,
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
  ]
})
export class NewsReaderModule { }
