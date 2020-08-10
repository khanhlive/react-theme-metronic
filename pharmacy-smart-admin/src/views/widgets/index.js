import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const Widgets = Loadable({
  loader: () => import("./components/Widgets"),
  loading: Loading
});

export const routes = [
  {
    path: "/widgets",
    exact: true,
    component: Widgets,
    name: "Widgets"
  }
];
