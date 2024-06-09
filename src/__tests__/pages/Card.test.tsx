import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Card } from "../../pages/home/Card.tsx";
import { TestWrapper } from "../TestWrapper.tsx";
import { useIncrementClickCount } from "../../hooks.ts";
import { mockItem } from "../../models.ts/mockItem.ts";

vi.mock("../../hooks.ts", () => ({
  useIncrementClickCount: vi
    .fn()
    .mockReturnValue({ incrementClickCount: vi.fn() }),
}));

describe("Card Component", () => {
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
    useIncrementClickCount.mockReturnValue({
      incrementClickCount: incrementClickCountMock,
    });

    render(
      <TestWrapper>
        <Card item={mockItem} />
      </TestWrapper>
    );

    const linkElement = screen.getByRole("link");
    fireEvent.click(linkElement);

    expect(incrementClickCountMock).toHaveBeenCalledWith(mockItem);
  });
});
