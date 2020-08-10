import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const FlotCharts = Loadable({
  loader: () => import("./components/FlotCharts"),
  loading: Loading
});
const ChartJs = Loadable({
  loader: () => import("./components/ChartJs"),
  loading: Loading
});
const MorrisCharts = Loadable({
  loader: () => import("./components/MorrisCharts"),
  loading: Loading
});
const SparklineCharts = Loadable({
  loader: () => import("./components/SparklineCharts"),
  loading: Loading
});
const EasyPieCharts = Loadable({
  loader: () => import("./components/EasyPieCharts"),
  loading: Loading
});
const Dygraphs = Loadable({
  loader: () => import("./components/Dygraphs"),
  loading: Loading
});
const HighchartTables = Loadable({
  loader: () => import("./components/HighchartTables"),
  loading: Loading
});

export const routes = [
  {
    path: "/graphs/flot",
    exact: true,
    component: FlotCharts,
    name: "FlotCharts"
  },

  {
    path: "/graphs/chartjs",
    exact: true,
    component: ChartJs,
    name: "ChartJs"
  },

  {
    path: "/graphs/morris",
    exact: true,
    component: MorrisCharts,
    name: "MorrisCharts"
  },

  {
    path: "/graphs/sparklines",
    exact: true,
    component: SparklineCharts,
    name: "SparklineCharts"
  },

  {
    path: "/graphs/easy-pie-charts",
    exact: true,
    component: EasyPieCharts,
    name: "EasyPieCharts"
  },

  {
    path: "/graphs/dygraphs",
    exact: true,
    component: Dygraphs,
    name: "Dygraphs"
  },
  {
    path: "/graphs/highchart-table",
    exact: true,
    component: HighchartTables,
    name: "HighchartTables"
  }
];
