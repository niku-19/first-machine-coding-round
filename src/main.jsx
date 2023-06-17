import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BookContextProvider from "./Context/Book-Context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <BookContextProvider>
      <App />
    </BookContextProvider>
  </BrowserRouter>
);
