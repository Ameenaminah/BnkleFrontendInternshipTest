import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import { CardResponse } from "../../models.ts/cardResponse.ts";
import { Card } from "../../pages/home/Card.tsx";
import { TestWrapper } from "../TestWrapper.tsx";
import { useIncrementClickCount } from "../../hooks.ts";

describe("Card Component", () => {
  const mockItem: CardResponse = {
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
  };

  it("should render the Card component with correct data", () => {
    render(
      <TestWrapper>
        <Card item={mockItem} />
      </TestWrapper>
    );

    const { getByText, getByAltText } = screen;

    expect(getByText(mockItem.title)).toBeInTheDocument();
    expect(getByText(mockItem.content)).toBeInTheDocument();
    expect(getByText(mockItem.author.name)).toBeInTheDocument();
    expect(getByText(mockItem.author.role)).toBeInTheDocument();
    expect(getByText("Learn more")).toBeInTheDocument();
    expect(getByAltText("").getAttribute("src")).toBe(mockItem.thumbnail.small);
  });

  it("should handle click event and call incrementClickCount", () => {
    const incrementClickCountMock = vi.fn();

    beforeEach(() => {
      vi.mocked(useIncrementClickCount).mockReturnValue({
        incrementClickCount: incrementClickCountMock,
      });
    });

    render(
      <Router>
        <Card item={mockItem} />
      </Router>
    );

    const linkElement = screen.getByRole("link");
    fireEvent.click(linkElement);

    expect(incrementClickCountMock).toHaveBeenCalledWith(mockItem);
  });
});
