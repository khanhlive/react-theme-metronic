import Loadable from "react-loadable";
import { Loading } from "../../common/navigation";


const PhongBan = Loadable({
    loader: () => import("./components/PhongBan/PhongBan"),
    loading: Loading
});

const TinhThanh = Loadable({
    loader: () => import("./components/TinhThanh/TinhThanh"),
    loading: Loading
});
const QuanHuyen = Loadable({
    loader: () => import("./components/QuanHuyen/QuanHuyen"),
    loading: Loading
});
const XaPhuong = Loadable({
    loader: () => import("./components/XaPhuong/XaPhuong"),
    loading: Loading
});
export const routes = [
    {
        path: "/danh-muc/phong-ban",
        exact: true,
        component: PhongBan,
        name: "phong-ban"
    },
    {
        path: "/danh-muc/tinh-thanh",
        exact: true,
        component: TinhThanh,
        name: "tinh-thanh"
    },
    {
        path: "/danh-muc/quan-huyen",
        exact: true,
        component: QuanHuyen,
        name: "quan-huyen"
    },
    {
        path: "/danh-muc/xa-phuong",
        exact: true,
        component: XaPhuong,
        name: "xa-phuong"
    },
];