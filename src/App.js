import * as React from "react";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import HowToPageContent from "./components/HowToPage/HowToPageContent";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="-39SquareFeetStudio/" element={<HomePage />} />
        <Route path="-39SquareFeetStudio/howto" element={<HowToPageContent />} />
        <Route path="-39SquareFeetStudio/example" element={<></>} />
      </Routes>
    </Layout>
  );
}

export default App;
