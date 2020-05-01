export type Article = {
  title: string;
  content: string;
  authors: string;
}
export type ArticleWithId = Article & {
  id: number
}

export type VoidCallback = () => void;
export type ArticleCallback = (article: Article) => void;
