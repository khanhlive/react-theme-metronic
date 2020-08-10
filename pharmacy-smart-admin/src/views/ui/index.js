import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const UiGeneral = Loadable({
  loader: () => import("./components/general/UiGeneral"),
  loading: Loading
});

const TreeViews = Loadable({
  loader: () => import("./components/TreeViews"),
  loading: Loading
});

const NestableLists = Loadable({
  loader: () => import("./components/NestableLists"),
  loading: Loading
});

const JQueryUi = Loadable({
  loader: () => import("./components/JQueryUi"),
  loading: Loading
});

const FontAwesomeIcons = Loadable({
  loader: () => import("./components/icons/FontAwesomeIcons"),
  loading: Loading
});

const FlagIcons = Loadable({
  loader: () => import("./components/icons/FlagIcons"),
  loading: Loading
});

const Glyphicons = Loadable({
  loader: () => import("./components/icons/Glyphicons"),
  loading: Loading
});

const Typography = Loadable({
  loader: () => import("./components/Typography"),
  loading: Loading
});

const Grid = Loadable({
  loader: () => import("./components/Grid"),
  loading: Loading
});

const Buttons = Loadable({
  loader: () => import("./components/Buttons"),
  loading: Loading
});

export const routes = [
  {
    path: "/ui/general",
    exact: true,
    component: UiGeneral,
    name: "Ui General"
  },
  {
    path: "/ui/tree-views",
    exact: true,
    component: TreeViews,
    name: "Tree Views"
  },
  {
    path: "/ui/nestable-lists",
    exact: true,
    component: NestableLists,
    name: "Nestable Lists"
  },
  {
    path: "/ui/jquery-ui",
    exact: true,
    component: JQueryUi,
    name: "JQueryUi"
  },
  {
    path: "/ui/font-awesome",
    exact: true,
    component: FontAwesomeIcons,
    name: "Font Awesome Icons"
  },
  {
    path: "/ui/flags",
    exact: true,
    component: FlagIcons,
    name: "Flag Icons"
  },
  {
    path: "/ui/glyphicons",
    exact: true,
    component: Glyphicons,
    name: "Glyphicons"
  },
  {
    path: "/ui/typography",
    exact: true,
    component: Typography,
    name: "Typography"
  },
  {
    path: "/ui/grid",
    exact: true,
    component: Grid,
    name: "Grid"
  },
  {
    path: "/ui/buttons",
    exact: true,
    component: Buttons,
    name: "Buttons"
  }
];
