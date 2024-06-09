import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../state/store.ts";
import { MemoryRouter } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const TestWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
};
