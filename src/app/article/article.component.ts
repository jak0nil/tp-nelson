import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article, ArticleWithId} from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: ArticleWithId;

  constructor() {

  }

  ngOnInit() {

  }

}
