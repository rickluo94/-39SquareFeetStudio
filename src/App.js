import * as React from "react";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import WorkflowPageContent from "./components/WorkflowPage/WorkflowPageContent";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="workflow" element={<WorkflowPageContent />} />
        <Route path="example" element={<></>} />
      </Routes>
    </Layout>
  );
}

export default App;
