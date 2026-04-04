import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("@/pages/Home"));

export default function App() {
  return (
    <Router basename="/BricksWorkshop-Web">
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-zinc-500">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<div className="text-center text-xl">Other Page - Coming Soon</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
