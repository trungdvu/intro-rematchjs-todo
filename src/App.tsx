import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <main className="text-center">
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/"></Route>
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
