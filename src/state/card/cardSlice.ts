import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CardResponse } from "../../models.ts";

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
  },
});

export const { setCards } = cardSlice.actions;
export default cardSlice.reducer;
