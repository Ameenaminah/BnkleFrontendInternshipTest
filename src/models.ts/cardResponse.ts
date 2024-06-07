import { AuthorResponse, emptyAuthorResponse } from "./author";
import { ThumbnailResponse, emptyThumbnailResponse } from "./thumbnail";

export interface CardResponse {
  id: number;
  date: number;
  title: string;
  content: string;
  thumbnail: ThumbnailResponse;
  author: AuthorResponse;
  clickCount?: number;
}

export const emptyCardResponse: CardResponse = {
  id: 0,
  date: 0,
  title: "",
  content: "",
  thumbnail: { ...emptyThumbnailResponse },
  author: { ...emptyAuthorResponse },
  clickCount: 0,
};
