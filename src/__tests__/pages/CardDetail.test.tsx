import { render, waitFor } from "@testing-library/react";
import { TestWrapper } from "../TestWrapper";
import { CardDetail } from "../../pages";
// import { mockItem } from "../../models.ts";

vi.mock("../../hooks/useFetchDetailData", () => ({
  useFetchDetailData: vi.fn(() => ({
    isFetching: true,
    data: null,
  })),
}));

describe("CardDetail", () => {
  test("renders loading spinner while fetching data", async () => {
    const { getByTestId, queryByTestId } = render(
      <TestWrapper>
        <CardDetail />
      </TestWrapper>
    );

    expect(getByTestId("spinner")).toBeInTheDocument();
    await waitFor(() => {
      expect(queryByTestId("CardNotFound")).not.toBeInTheDocument();
    });
  });

  // test("renders CardNotFound when no data is fetched", async () => {
  //   vi.mock("../../hooks", () => ({
  //     useFetchDetailData: vi.fn(() => ({
  //       isFetching: false,
  //       data: null,
  //     })),
  //   }));

  //   const { getByTestId, queryByTestId } = render(
  //     <TestWrapper>
  //       <CardDetail />
  //     </TestWrapper>
  //   );

  //   expect(getByTestId("CardNotFound")).toBeInTheDocument();

  //   await waitFor(() => {
  //     expect(queryByTestId("spinner")).not.toBeInTheDocument();
  //   });
  // });

  // test("renders card details when data is fetched", async () => {
  //   afterEach(() => {
  //     vi.clearAllMocks();
  //   });

  //   vi.mock("../../hooks", () => ({
  //     useFetchDetailData: vi.fn(() => ({
  //       isFetching: false,
  //       data: mockItem,
  //     })),
  //   }));

  //   const { queryByTestId, getByText } = render(
  //     <TestWrapper>
  //       <CardDetail />
  //     </TestWrapper>
  //   );

  //   await waitFor(() => {
  //     expect(getByText(mockItem.title)).toBeInTheDocument();
  //     expect(getByText(mockItem.content)).toBeInTheDocument();
  //   });
  // });
});
