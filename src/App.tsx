import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SearchPage } from "./pages/search-page";
import { WorkDetailPage } from "./pages/work-detail-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/search"} replace />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/works/:workId" element={<WorkDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
