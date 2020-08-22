import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const Login = Loadable({
  loader: () => import("./components/Login"),
  loading: Loading
});

const Logout = Loadable({
  loader: () => import("./components/Logout"),
  loading: Loading
});

const LockedScreen = Loadable({
  loader: () => import("./components/LockedScreen"),
  loading: Loading
});

const Register = Loadable({
  loader: () => import("./components/Register"),
  loading: Loading
});

const Forgot = Loadable({
  loader: () => import("./components/Forgot"),
  loading: Loading
});

export const routes = [
  {
    path: "/login",
    exact: true,
    component: Login,
    name: "Login"
  },
  {
    path: "/logout",
    exact: true,
    component: Logout,
    name: "Logout"
  },
  {
    path: "/lock",
    exact: true,
    component: LockedScreen,
    name: "Locked Screen"
  },
  {
    path: "/register",
    exact: true,
    component: Register,
    name: "Register"
  },
  {
    path: "/forgot",
    exact: true,
    component: Forgot,
    name: "Forgot"
  }
];
