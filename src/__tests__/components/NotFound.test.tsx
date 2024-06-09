import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { NotFound } from "../../components";
import { NotFoundImage } from "../../assets";
import { TestWrapper } from "../TestWrapper";

describe("NotFound", () => {
  it("renders the not found image, text, and link correctly", () => {
    render(
      <TestWrapper>
        <NotFound />
      </TestWrapper>
    );

    const imgElement = screen.getByAltText("Not Found Image");
    const textElement = screen.getByText(
      /Sorry, the page you are looking for could not be found or has been removed./i
    );
    const linkElement = screen.getByRole("link", { name: /Back to Home/i });

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", NotFoundImage);
    expect(textElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/cards");
  });
});
