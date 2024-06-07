import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { CardResponse } from "../models.ts";
import { incrementClickCount } from "../state/card/cardSlice.ts";

interface useIncrementClickCount {
  incrementClickCount: (data: CardResponse) => void;
}

export const useIncrementClickCount = (): useIncrementClickCount => {
  const dispatch = useDispatch();

  const incrementClickCountAction = useCallback(
    (data: CardResponse) => {
      dispatch(incrementClickCount({ card: data, countIncrement: 1 }));
    },
    [dispatch]
  );

  return {
    incrementClickCount: incrementClickCountAction,
  };
};
