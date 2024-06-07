import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CardResponse } from "../../models.ts";

interface CountCardPayload {
  card: CardResponse;
  countIncrement: number;
}

interface CardState {
  value: {
    cards: CardResponse[];
  };
}

const initialState: CardState = {
  value: {
    cards: [],
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
      const { card, countIncrement } = action.payload;

      state.value.cards = state.value.cards.map((c) =>
        c.id === card.id
          ? { ...c, clickCount: (c.clickCount || 0) + countIncrement }
          : c
      );
    },
  },
});

export const { setCards, incrementClickCount } = cardSlice.actions;
export default cardSlice.reducer;
