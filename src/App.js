import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResult from "./components/SearchResult";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search",
        element: <SearchResult />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <>
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
}

/** Layout
 
 * Head 
 * Body
 *  - Sidebar
 *      - MenuItems
 * MainContainer
 *   - ButtonList
 *   - VideoContainer
 *      - VideoCard
 */

export default App;
