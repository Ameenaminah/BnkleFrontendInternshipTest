import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CardResponse } from "../models.ts/index.ts";

export const useFetchDetailData = (
  queryKey: string[],
  queryFn: () => Promise<CardResponse | null>
): UseQueryResult<CardResponse | null> => {
  return useQuery<CardResponse | null>({
    queryKey,
    queryFn,
  });
};

export const useFetchData = (
  queryKey: string[],
  queryFn: () => Promise<CardResponse[] | null>
): UseQueryResult<CardResponse[] | null> => {
  return useQuery<CardResponse[] | null>({
    queryKey,
    queryFn,
  });
};
