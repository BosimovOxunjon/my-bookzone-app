import SignUp from "./pages/Login/SignUp";
import SignIn from "./pages/Login/SignIn";
import Home from "./pages/Home/Home";
import BookDetails from "./pages/BookDetails/BookDetails";

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
    path: "/book:id",
    component: BookDetails,
    key: "book:id",
  },
];
