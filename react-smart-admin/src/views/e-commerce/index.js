import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const Orders = Loadable({
  loader: () => import("./components/Orders"),
  loading: Loading
});

const Products = Loadable({
  loader: () => import("./components/Products"),
  loading: Loading
});

const Detail = Loadable({
  loader: () => import("./components/Detail"),
  loading: Loading
});

export const routes = [
  {
    path: "/e-commerce/orders",
    exact: true,
    component: Orders,
    name: "Orders"
  },
  {
    path: "/e-commerce/products-view",
    exact: true,
    component: Products,
    name: "Products"
  },
  {
    path: "/e-commerce/products-detail",
    exact: true,
    component: Detail,
    name: "Detail"
  }
];
