import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./card/cardSlice";
// import { persistReducer, persistStore } from "redux-persist";

// const persistConfig = {
//   key: "root",
// };

// const persistedReducer = persistReducer(persistConfig, userSlice);

// export const store = configureStore({
//   reducer: {
//     card: cardSlice,
//     user: persistedReducer,
//   },
// });

// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    card: cardSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
