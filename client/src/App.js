import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MyLibraryPage from "./pages/MyLibraryPage";
import ShortBooksPage from "./pages/ShortBooksPage";
import SettingsPage from "./pages/SettingsPage";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define the paths for MainPage and LibraryPage */}
        <Route path="/" element={<MainPage />} />
        <Route path="/MyLibrary" element={<MyLibraryPage />} />
        <Route path="/ShortBooks" element={<ShortBooksPage/>} />
        <Route path="/Settings" element={<SettingsPage/>}/>
        <Route path="/Summary" element={<SummaryPage/>}/>
        <Route path="/book/:id" element={<ShortBooksPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
