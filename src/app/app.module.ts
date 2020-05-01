import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import {ArticleService} from './article.service';
import {HttpClientModule} from '@angular/common/http';
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleSearchComponent } from './article-search/article-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    ArticleSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
