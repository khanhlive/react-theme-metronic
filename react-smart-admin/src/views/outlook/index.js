import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const Outlook = Loadable({
  loader: () => import("./components/Outlook"),
  loading: Loading
});
export const routes = [
  { path: "/outlook", name: "Outlook", component: Outlook }
];

export * from "./OutlookActions";
export * from "./outlookReducer";
