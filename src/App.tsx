import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, Analytics } from "./pages";
import { Layout } from "./components/Layout";

// import { Layout, NotFound } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
