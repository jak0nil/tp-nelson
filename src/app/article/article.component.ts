import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article, ArticleWithId} from '../models/article';
import {ActivatedRoute} from '@angular/router';
import {ArticleService} from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  constructor() {

  }

  ngOnInit() {

  }

}
