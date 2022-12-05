import SignUp from "./pages/Login/SignUp";
import SignIn from "./pages/Login/SignIn";
import Home from "./pages/Home/Home";
import BookDetails from "./pages/BookDetails/BookDetails";
import Authors from "./pages/Authors/Authors";
import AuthorDetails from "./pages/AuthorDetails/AuthorDetails";

export default [
  {
    path: "/signup",
    component: SignUp,
    key: "signUp",
  },
  {
    path: "/signin",
    component: SignIn,
    key: "signIn",
  },
  {
    path: "/home",
    component: Home,
    key: "home",
  },
  {
    path: "/authors",
    component: Authors,
    key: "authors",
  },
  {
    path: "/book/:id",
    component: BookDetails,
    key: "book:id",
  },
  {
    path: "/author/:id",
    component: AuthorDetails,
    key: "author:id",
  },
];
