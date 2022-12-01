import "./App.css";
import SignUp from "./pages/Login/SignUp";
import SignIn from "./pages/Login/SignIn";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import BookDetails from "./pages/BookDetails/BookDetails";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/book/:id" element={<BookDetails />} exact />
        <Route path="/signin" element={<SignIn />} exact />
      </Routes>
    </>
  );
}

export default App;
