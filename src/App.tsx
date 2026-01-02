import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SearchPage } from "./pages/search-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/search"} replace />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
