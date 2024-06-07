export interface AuthorResponse {
  name: string;
  avatar: string;
  role: string;
}

export const emptyAuthorResponse: AuthorResponse = {
  name: "",
  avatar: "",
  role: "",
};
