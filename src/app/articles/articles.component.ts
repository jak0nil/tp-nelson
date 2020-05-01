import {Component, OnInit} from '@angular/core';
import {Article, ArticleWithId} from '../models/article';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  private _articles: ArticleWithId[];
  private search: Article = {
    title: "",
    content: "",
    authors: ""
  };

  constructor(private articleService: ArticleService) {
    this.searchFilter.bind(this);
  }

  articles(): ArticleWithId[] {
    return this._articles;
  }

  nbArticles(): number {
    return this._articles == null ? -1 : this._articles.length;
  }

  delete({id} : ArticleWithId) {
    this.articleService.deleteArticle(id).subscribe(() => this.refreshArticles())
  }

  ngOnInit() {
    this.refreshArticles()
  }

  refreshArticles() {
    this.articleService.getArticles().subscribe(
      value => this._articles = value.filter(this.searchFilter)
    )
  }

  searchFilter = (article: ArticleWithId): boolean =>  {
    const search = this.search;
    return (!search.title || article.title.indexOf(search.title) >= 0) &&
      (!search.authors || article.authors.indexOf(search.authors) >= 0) &&
      (!search.content || article.content.indexOf(search.content) >= 0);
  };

  createArticle = (article: Article) => {
    this.articleService.create(article).subscribe(() => this.refreshArticles());
  };

  searchArticle = (search: Article) => {
    this.search = search;
    this.refreshArticles();
  };

}
