import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing Page/LandingPage";
import SearchPage from "./Pages/Search Page/SearchPage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
