import * as React from "react";
import Layout from "./components/Layout/Layout";
import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
