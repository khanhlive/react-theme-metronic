import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const BlankPage = Loadable({
  loader: () => import("./components/BlankPage"),
  loading: Loading
});

const PricingTables = Loadable({
  loader: () => import("./components/PricingTables"),
  loading: Loading
});

const Invoice = Loadable({
  loader: () => import("./components/Invoice"),
  loading: Loading
});

const CKEditorDemo = Loadable({
  loader: () => import("./components/CKEditorDemo"),
  loading: Loading
});

const Search = Loadable({
  loader: () => import("./components/Search"),
  loading: Loading
});

const EmailTemplate = Loadable({
  loader: () => import("./components/EmailTemplate"),
  loading: Loading
});

export const Page404 = Loadable({
  loader: () => import("./components/Page404"),
  loading: Loading
});

const Page500 = Loadable({
  loader: () => import("./components/Page500"),
  loading: Loading
});

export const routes = [
  {
    path: "/misc/blank",
    exact: true,
    component: BlankPage,
    name: "Blank Page"
  },
  {
    path: "/misc/pricing-tables",
    exact: true,
    component: PricingTables,
    name: "Pricing Tables"
  },
  {
    path: "/misc/invoice",
    exact: true,
    component: Invoice,
    name: "Invoice"
  },
  {
    path: "/misc/ck-editor",
    exact: true,
    component: CKEditorDemo,
    name: "CKEditorDemo"
  },
  {
    path: "/misc/search",
    exact: true,
    component: Search,
    name: "Search"
  },
  {
    path: "/misc/email-template",
    exact: true,
    component: EmailTemplate,
    name: "Email Template"
  },
  {
    path: "/misc/404",
    exact: true,
    component: Page404,
    name: "Page 404"
  },
  {
    path: "/misc/500",
    exact: true,
    component: Page500,
    name: "Page 500"
  }
];
