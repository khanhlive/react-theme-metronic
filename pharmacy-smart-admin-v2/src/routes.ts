import { routes as appViews } from "./views/app-views";
import { routes as auth } from "./views/auth";
import { routes as calendar } from "./views/calendar";
import { routes as dashboards } from "./views/dashboard";
import { routes as eCommerce } from "./views/e-commerce";
import { routes as forms } from "./views/forms";
import { routes as graphs } from "./views/graphs";
import { routes as maps } from "./views/maps";
import { routes as misc } from "./views/misc";
//import { routes as outlook } from "./views/outlook";
import { routes as smartadminIntel } from "./views/smartadmin-intel";
import { routes as tables } from "./views/tables";
import { routes as ui } from "./views/ui";
import { routes as widgets } from "./views/widgets";
import { routes as danhmuc } from "./app/danhmuc";

export const routes = [
  ...appViews,
  ...calendar,
  ...dashboards,
  ...eCommerce,
  ...forms,
  ...graphs,
  ...maps,
  ...misc,
  //...outlook,
  ...smartadminIntel,
  ...tables,
  ...ui,
  ...widgets,
  ...danhmuc,
];

export const authRoutes = [...auth];
