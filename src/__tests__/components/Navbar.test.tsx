import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { links } from "../../data";
import { Navbar } from "../../components/navbar/Navbar";
import { TestWrapper } from "../TestWrapper";

describe("Navbar", () => {
  it("renders all nav links correctly", () => {
    render(
      <TestWrapper>
        <Navbar />
      </TestWrapper>
    );

    links.forEach(({ link }) => {
      const navLink = screen.getByText(link);
      expect(navLink).toBeInTheDocument();
    });
  });

  it("toggles the click state and class name on link click", async () => {
    const user = userEvent.setup();
    render(
      <TestWrapper>
        <Navbar />
      </TestWrapper>
    );

    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveClass("navbar");

    const firstNavLink = screen.getByText(links[0].link);
    await user.click(firstNavLink);

    expect(navElement).toHaveClass("navbar active");

    await user.click(firstNavLink);
    expect(navElement).toHaveClass("navbar");
  });

  it("applies the correct active class based on route", () => {
    render(
      <MemoryRouter initialEntries={["/cards"]}>
        <Navbar />
      </MemoryRouter>
    );

    const activeLink = screen.getByText("Home");
    expect(activeLink).toHaveClass("active");

    const inactiveLink = screen.getByText("Analytics");
    expect(inactiveLink).toHaveClass("unActive");
  });
});
