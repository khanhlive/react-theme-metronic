import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";



const CalendarPage = Loadable({
  loader: () => import("./components/CalendarPage"),
  loading: Loading
});

export const routes = [
  {
    path: "/calendar",
    exact: true,
    component: CalendarPage,
    name: "Calendar"
  },

];
