import {Component, OnInit} from '@angular/core';
import {Article, ArticleWithId} from '../models/article';
import {ArticleService} from '../article.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  private _articles: ArticleWithId[];

  constructor(private articleService: ArticleService) {
  }

  articles(): ArticleWithId[] {
    return this._articles;
  }

  delete({id} : ArticleWithId) {
    this.articleService.deleteArticle(id).subscribe(() => this.refreshArticles())
  }

  ngOnInit() {
    this.refreshArticles()
  }

  refreshArticles() {
    this.articleService.getArticles().subscribe(
      value => this._articles = value
    )
  }

  createArticle = (article: Article) => {
    this.articleService.create(article).subscribe(() => this.refreshArticles());
  };

}
