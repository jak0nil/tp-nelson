import { Injectable } from '@angular/core';
import {Article, ArticleWithId} from './models/article';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) { }

  getArticles(): Observable<ArticleWithId[]> {
    return this.http.get<ArticleWithId[]>("http://localhost:3000/articles");
  }

  deleteArticle(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/articles/${id}`);
  }

  create(newArticle: Article) {
    return this.http.post<Article>("http://localhost:3000/articles/", newArticle);
  }

}
