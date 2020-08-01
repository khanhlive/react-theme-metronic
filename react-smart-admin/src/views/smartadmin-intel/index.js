import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const AppLayouts = Loadable({
  loader: () => import("./components/AppLayouts"),
  loading: Loading
});

const Skins = Loadable({
  loader: () => import("./components/Skins"),
  loading: Loading
});

export const routes = [
  {
    path: "/smartadmin/app-layouts",
    exact: true,
    component: AppLayouts,
    name: "App Layouts"
  },
  {
    path: "/smartadmin/skins",
    exact: true,
    component: Skins,
    name: "Skins"
  }
];
