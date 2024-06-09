import { CardResponse } from "./cardResponse";

export const mockItem: CardResponse = {
  id: 1,
  date: 1111111,
  title: "Test Title",
  content: "Test content",
  thumbnail: {
    small: "https://example.com/image.jpg",
    large: "https://example.com/image.jpg",
  },
  author: {
    name: "John Doe",
    role: "Author",
    avatar: "https://example.com/image.jpg",
  },
  clickCount: 0,
};