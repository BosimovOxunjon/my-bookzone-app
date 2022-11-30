import "./App.css";
import SignUp from "./pages/Login/SignUp";
import SignIn from "./pages/Login/SignIn";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/signin" element={<SignIn />} exact />
      </Routes>
    </>
  );
}

export default App;
