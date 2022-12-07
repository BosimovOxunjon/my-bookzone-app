import "./App.css";
import SignUp from "./pages/Login/SignUp";
import SignIn from "./pages/Login/SignIn";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Authors from "./pages/Authors/Authors";
import BookDetails from "./pages/BookDetails/BookDetails";
import AuthorDetails from "./pages/AuthorDetails/AuthorDetails";
import AddBook from "./pages/AddBook/AddBook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} exact />
        <Route path="/book/:id" element={<BookDetails />} exact />
        <Route path="/authors" element={<Authors />} />
        <Route path="/author/:id" element={<AuthorDetails />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/addbook" element={<AddBook />} exact />
      </Routes>
    </>
  );
}

export default App;
