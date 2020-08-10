import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";

const FormElements = Loadable({
  loader: () => import("./components/FormElements"),
  loading: Loading
});

const FormLayouts = Loadable({
  loader: () => import("./components/layouts/FormLayouts"),
  loading: Loading
});

const FormValidation = Loadable({
  loader: () => import("./components/FormValidation"),
  loading: Loading
});

const BootstrapFormElements = Loadable({
  loader: () => import("./components/BootstrapFormElements"),
  loading: Loading
});

const BootstrapValidation = Loadable({
  loader: () => import("./components/bootstrap-validation/BootstrapValidation"),
  loading: Loading
});

const FormPlugins = Loadable({
  loader: () => import("./components/form-plugins/FormPlugins"),
  loading: Loading
});

const Wizards = Loadable({
  loader: () => import("./components/wizards/Wizards"),
  loading: Loading
});

const DropzoneDemo = Loadable({
  loader: () => import("./components/DropzoneDemo"),
  loading: Loading
});

const BootstrapEditors = Loadable({
  loader: () => import("./components/BootstrapEditors"),
  loading: Loading
});

const ImageCropping = Loadable({
  loader: () => import("./components/ImageCropping"),
  loading: Loading
});

export const routes = [
  {
    path: "/forms/elements",
    exact: true,
    component: FormElements,
    name: "Form Elements"
  },
  {
    path: "/forms/layouts",
    exact: true,
    component: FormLayouts,
    name: "Form Layouts"
  },
  {
    path: "/forms/form-validation",
    exact: true,
    component: FormValidation,
    name: "Form Validation"
  },
  {
    path: "/forms/bootstrap-form-elements",
    exact: true,
    component: BootstrapFormElements,
    name: "Bootstrap Form Elements"
  },
  {
    path: "/forms/bootstrap-validation",
    exact: true,
    component: BootstrapValidation,
    name: "Bootstrap Valliidation"
  },
  {
    path: "/forms/plugins",
    exact: true,
    component: FormPlugins,
    name: "Form Plugins"
  },
  {
    path: "/forms/wizards",
    exact: true,
    component: Wizards,
    name: "Wizards"
  },
  {
    path: "/forms/dropzone",
    exact: true,
    component: DropzoneDemo,
    name: "Dropzone"
  },
  {
    path: "/forms/bootstrap-editors",
    exact: true,
    component: BootstrapEditors,
    name: "Bootstrap Editors"
  },
  {
    path: "/forms/image-editor",
    exact: true,
    component: ImageCropping,
    name: "Image Cropping"
  }
];
