import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CardResponse } from "../../models.ts";

interface CountCardPayload {
  cardId: number;
  countIncrement: number;
}

interface CardState {
  value: {
    cards: CardResponse[];
    clickCount: number;
  };
}

const initialState: CardState = {
  value: {
    cards: [],
    clickCount: 0,
  },
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardResponse[]>) => {
      state.value.cards = action.payload;
    },
    incrementClickCount: (state, action: PayloadAction<CountCardPayload>) => {
      const { cardId, countIncrement } = action.payload;

      const existingCard = state.value.cards.find((c) => c.id === cardId);

      if (existingCard) {
        state.value.clickCount += countIncrement;
      }
    },
  },
});

export const { setCards, incrementClickCount } = cardSlice.actions;
export default cardSlice.reducer;
