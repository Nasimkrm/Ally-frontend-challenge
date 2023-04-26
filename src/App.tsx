import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Request from "./pages/Request";
import DetailedRecommendation from "./pages/DetailedRecommendation";

const App: React.FC = () => {
  return (
    <div className=" min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Request />} />
          <Route
            path="/recommendation/:id"
            element={<DetailedRecommendation />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
