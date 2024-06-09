import { render, waitFor } from "@testing-library/react";
import { TestWrapper } from "../TestWrapper";
import { Cards } from "../../pages";

vi.mock("../../hooks/useFetchData", () => ({
  useFetchData: vi.fn(() => ({
    isLoading: true,
    data: null,
  })),
}));

describe("CardDetail", () => {
  test("renders loading spinner while fetching data", async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Cards />
      </TestWrapper>
    );
    await waitFor(() => {
      expect(getByTestId("spinner")).toBeInTheDocument();
    });
  });
});
