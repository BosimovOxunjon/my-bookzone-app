import SignUp from "./pages/Login/SignUp";
import SignIn from "./pages/Login/SignIn";

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
];
