import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save
import kiemTraDaiLy from "./kiemTraDaiLy";
// import kiemTranNhanVien from "./kiemTranNhanVien";
import kiemTraKhachHang from "./kiemTraKhachHang";
import KiemTraAdmin from "./KiemTraAdmin";

const routes = [
  {
    path: "/admin/danh-sach-tu",
    component: () => import("../components/WebTuDo/Admin/DanhSachTu/index.vue"),
    meta: { layout: "adm" },
    beforeEnter: KiemTraAdmin,
  },
  {
    path: "/admin/danh-sach-khach-hang",
    component: () =>
      import("../components/WebTuDo/Admin/DanhSachKhachHang/index.vue"),
    meta: { layout: "adm" },
    beforeEnter: KiemTraAdmin,
  },
  {
    path: "/admin/dang-ky",
    component: () => import("../components/WebTuDo/Admin/DangKy/index.vue"),
    meta: { layout: "adm" },
  },
  {
    path: "/admin/dang-nhap",
    component: () => import("../components/WebTuDo/Admin/DangNhap/index.vue"),
    meta: { layout: "adm" },
  },

  {
    path: "/",
    component: () => import("../components/WebTuDo/NguoiDung/Home/index.vue"),
    meta: { layout: "kh" },
    beforeEnter: kiemTraKhachHang,
  },
  {
    path: "/khach-hang/nap-tien",
    component: () =>
      import("../components/WebTuDo/NguoiDung/NapTien/index.vue"),
    meta: { layout: "kh" },
    beforeEnter: kiemTraKhachHang,
  },
  {
    path: "/khach-hang/dang-ky",
    component: () => import("../components/WebTuDo/NguoiDung/DangKy/index.vue"),
    meta: { layout: "kh" },
  },
  {
    path: "/khach-hang/dang-nhap",
    component: () =>
      import("../components/WebTuDo/NguoiDung/DangNhap/index.vue"),
    meta: { layout: "kh" },
  },

  {
    path: "/kich-hoat-tai-khoan/:id_can_kich_hoat",
    component: () =>
      import("../components/WebTuDo/NguoiDung/KichHoat/index.vue"),
    meta: { layout: "kh" },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
