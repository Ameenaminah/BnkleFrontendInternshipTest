import { renderHook, waitFor } from "@testing-library/react";
import { useFetchData, useFetchDetailData } from "../../hooks.ts";
import { TestWrapper } from "../TestWrapper.tsx";
import { mockItem } from "../../models.ts/mockItem.ts";


describe("useFetch hook", () => {
 test("useFetchData hook fetches data successfully", async () => {
  const { result } = renderHook(
    () => useFetchData(["customHook"], () => Promise.resolve([mockItem])),
    {
      wrapper: TestWrapper,
    }
  );

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data).toEqual([mockItem]);
});

test("useFetchData hook fetches data successfully", async () => {
  const { result } = renderHook(
    () => useFetchDetailData(["customHook"], () => Promise.resolve(mockItem)),
    {
      wrapper: TestWrapper,
    }
  );

  await waitFor(() => expect(result.current.isSuccess).toBe(true));

  expect(result.current.data).toEqual(mockItem);
});
});