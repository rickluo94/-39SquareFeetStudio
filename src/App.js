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
        <Route path="petban.net/" element={<HomePage />} />
        <Route path="petban.net/howto" element={<HowToPageContent />} />
        <Route path="petban.net/example" element={<></>} />
      </Routes>
    </Layout>
  );
}

export default App;
