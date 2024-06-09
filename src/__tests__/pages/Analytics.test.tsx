import { render, screen } from "@testing-library/react";
import { useAppSelector } from "../../hooks.ts"; // Make sure to use correct path
import { Analytics } from "../../pages/index.ts";
import { TestWrapper } from "../TestWrapper.tsx";
import { mockItem } from "../../models.ts/index.ts";


vi.mock("../../hooks.ts", () => ({
  useAppSelector: vi.fn(),
}));

describe("Analytics component", () => {
  it("renders loading spinner when cards are loading", () => {
    useAppSelector.mockReturnValue({ cards: null });

    render(
      <TestWrapper>
        <Analytics />
      </TestWrapper>
    );

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("renders cards when cards are available", () => {
    useAppSelector.mockReturnValue({
      cards: [mockItem],
    });

    render(
      <TestWrapper>
      <Analytics/>
      </TestWrapper>
    );

    expect(screen.getByText("Card Id")).toBeInTheDocument();
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Number of Clicks")).toBeInTheDocument();
  });
});
