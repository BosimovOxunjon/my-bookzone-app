import "./App.css";
import SignUp from "./pages/Login/SignUp";
import SignIn from "./pages/Login/SignIn";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import BookDetails from "./pages/BookDetails/BookDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/book/:id" element={<BookDetails />} exact />
        <Route path="/signin" element={<SignIn />} exact />
      </Routes>
    </>
  );
}

export default App;
