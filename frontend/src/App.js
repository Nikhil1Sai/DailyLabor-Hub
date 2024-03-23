import React from "react";
import PostJobsComponent from "./components/postJobComponent";
import FindJobsComponent from "./components/findJobsComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/Main";

function App() {
  return (
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="post-jobs" element={<PostJobsComponent />} />
          <Route path="find-jobs" element={<FindJobsComponent />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
