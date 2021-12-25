import * as React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { authSelector } from "./helpers/selectors";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const auth = useSelector(authSelector);

  return (
    <main className="text-center">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signin"
            element={
              auth.currentUser ? <Navigate replace to="/" /> : <SignInPage />
            }
          />
          <Route
            path="/signup"
            element={
              auth.currentUser ? <Navigate replace to="/" /> : <SignUpPage />
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
