export type Article = {
  title: string;
  content: string;
  authors: string;
}
export type ArticleWithId = Article & {
  id: number
}


export type ArticleCreationCallBack = (article: Article) => void;
export type ArticleWithIdCreationCallBack = (article: ArticleWithId) => void;
