export interface ThumbnailResponse {
  large: string;
  small: string;
}

export const emptyThumbnailResponse: ThumbnailResponse = {
  large: "",
  small: "",
};
