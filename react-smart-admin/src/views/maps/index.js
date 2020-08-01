import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const Maps = Loadable({
  loader: () => import("./components/Maps"),
  loading: Loading
});

export const routes = [
  {
    path: "/maps",
    component: Maps,
    name: "Maps"
  }
];
