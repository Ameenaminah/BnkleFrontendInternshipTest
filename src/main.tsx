import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ServicesProvider } from "./service/ioc/serviceDependency.tsx";
import { Provider } from "react-redux";
import { createServices } from "./service/ioc/serviceCreator.ts";
import { store } from "./state/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const services = createServices();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ServicesProvider services={services}>
          <App />
        </ServicesProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
