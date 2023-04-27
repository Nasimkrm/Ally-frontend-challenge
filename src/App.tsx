import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Request from "./pages/Request";
import DetailedRecommendation from "./pages/DetailedRecommendation";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className=" min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Request />} />
          <Route
            path="/recommendations/:type"
            element={<DetailedRecommendation />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
