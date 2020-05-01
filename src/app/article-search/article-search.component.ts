import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticleCallback, VoidCallback} from '../models/article';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {
  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder) {
    this.resetForm();
  }

  @Input()
  searchCallback: ArticleCallback;

  ngOnInit() {}

  searchArticle() {
    const formModel = this.articleForm.value;
    const rawArticle = {
      title: formModel.title,
      content: formModel.content,
      authors: formModel.authors,
    };
    this.searchCallback(rawArticle)
  }

  resetForm() {
    this.articleForm = this.fb.group({
      title: ["", null],
      content: ["", null],
      authors: ["", null],
    });
  }
  resetSearch() {
    this.resetForm();
  }
}
