import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { TestWrapper } from "../TestWrapper";
import { CardNotFound } from "../../components";

describe("CardNotFound", () => {
  it("renders the title and link correctly", () => {
    render(
      <TestWrapper>
        <CardNotFound />
      </TestWrapper>
    );

    const titleElement = screen.getByText(
      /Card does not exist. Please go back/i
    );
    const linkElement = screen.getByRole("link", { name: /Back to Cards/i });

    expect(titleElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/cards");
  });
});
