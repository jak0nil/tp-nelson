import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ArticleService} from '../article.service';
import {Article, ArticleCreationCallBack} from '../models/article';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {
  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      authors: ["", Validators.required],
    });
  }

  @Input()
  creationCallback: ArticleCreationCallBack;


  ngOnInit() {}

  handleArticle() {
    const formModel = this.articleForm.value;
    const rawArticle = {
      title: formModel.title,
      content: formModel.content,
      authors: formModel.authors,
    };
    this.creationCallback(rawArticle)
  }
}
